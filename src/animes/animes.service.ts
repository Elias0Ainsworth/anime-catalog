import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Injectable()
export class AnimesService {
  constructor(private readonly prisma: PrismaService){}

  async create(createAnimeDto: CreateAnimeDto) {
try {
  const candidate = await this.prisma.anime.findFirst({
    where: {
      name: createAnimeDto.name
    }
  });
  if(candidate){
    throw new HttpException('This anime is already exist', HttpStatus.FORBIDDEN);
  }
  return await await this.prisma.anime.create({data: {
    name: createAnimeDto.name,
    date: createAnimeDto.date,
    mangaka: {
      connect: {id: createAnimeDto.mangaka_id}
    },
    director: {
      connect: {id: createAnimeDto.director_id}
    },
    image: createAnimeDto.image
  }
  }
)  
} catch (error) {
  throw new HttpException('Bad requiest', HttpStatus.BAD_REQUEST);
}
  }

  async findAll() {
    return this.prisma.anime.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.anime.findUnique({where:{id}});
  }

  async update(id: number, updateAnimeDto: UpdateAnimeDto) {
    return await this.prisma.anime.update({where: {id}, data: updateAnimeDto});
  }

  async remove(id: number) {
    return await this.prisma.anime.delete({where: {id}});
  }
}
