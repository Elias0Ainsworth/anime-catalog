import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMangakaDto } from './dto/create-mangaka.dto';
import { UpdateMangakaDto } from './dto/update-mangaka.dto';

@Injectable()
export class MangakaService {
  constructor(private readonly prisma: PrismaService){}

  async create(createMangakaDto: CreateMangakaDto) {
    return await this.prisma.mangaka.create({data: createMangakaDto});
  }

  async findAll() {
    return await this.prisma.mangaka.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.mangaka.findUnique({where: {id}});
  }

  async update(id: number, updateMangakaDto: UpdateMangakaDto) {
    return await this.prisma.mangaka.update({data: updateMangakaDto, where: {id}});
  }

  async remove(id: number) {
    return await this.prisma.mangaka.delete({where: {id}});
  }
}
