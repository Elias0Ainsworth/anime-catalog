import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
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
      throw new HttpException('This anime is already exist', HttpStatus.CONFLICT);
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
    });  
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findAll() {
    try {
      return this.prisma.anime.findMany({
        include: {director: true, mangaka: true}
      });
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.anime.findUnique({where:{id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async update(id: number, updateAnimeDto: UpdateAnimeDto) {
    try {
      return await this.prisma.anime.update({where: {id}, data: updateAnimeDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.anime.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
