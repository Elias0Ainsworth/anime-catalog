import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Injectable()
export class DirectorsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createDirectorDto: CreateDirectorDto) {
    return await this.prisma.director.create({data: createDirectorDto});
  }

  async findAll() {
    return await this.prisma.director.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.director.findUnique({where: {id}});
  }

  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    return await this.prisma.director.update({data: updateDirectorDto, where: {id}});
  }

  async remove(id: number) {
    return await this.prisma.director.delete({where: {id}});
  }
}
