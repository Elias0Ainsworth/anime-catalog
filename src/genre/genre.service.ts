import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
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
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findAll() {
    try {
      return await this.prisma.genre.findMany();
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.genre.findUnique({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    try {
      return await this.prisma.genre.update({where: {id}, data: updateGenreDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.genre.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
