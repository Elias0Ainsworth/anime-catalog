import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Injectable()
export class DirectorsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createDirectorDto: CreateDirectorDto) {
    try {
      return await this.prisma.director.create({data: createDirectorDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findAll() {
    try {
      return await this.prisma.director.findMany();
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.director.findUnique({
        where: {id},
        select: {anime: true}
      });
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    try {
      return await this.prisma.director.update({data: updateDirectorDto, where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.director.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
