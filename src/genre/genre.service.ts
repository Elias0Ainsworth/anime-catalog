import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService){}

  async create(createGenreDto: CreateGenreDto) {
    try {
      const candidate = await this.prisma.genre.findUnique({
        where: {
          name: createGenreDto.name}
        });
      if(candidate){
        throw new HttpException('Genre is already exist', HttpStatus.BAD_REQUEST);
      }
      
      return await this.prisma.genre.create({data: createGenreDto});
    } catch (error) {
      throw new HttpException('Unknown exeptions', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.prisma.genre.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.genre.findUnique({where: {id}});
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    return await this.prisma.genre.update({where: {id}, data: updateGenreDto});
  }

  async remove(id: number) {
    return await this.prisma.genre.delete({where: {id}});
  }
}
