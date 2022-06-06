import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMangakaDto } from './dto/create-mangaka.dto';
import { UpdateMangakaDto } from './dto/update-mangaka.dto';

@Injectable()
export class MangakaService {
  constructor(private readonly prisma: PrismaService){}

  async create(createMangakaDto: CreateMangakaDto) {
    try {
      return await this.prisma.mangaka.create({data: createMangakaDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findAll() {
    try {
      return await this.prisma.mangaka.findMany();
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.mangaka.findUnique({
        where: {id},
        include: {anime: true}
      });
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async update(id: number, updateMangakaDto: UpdateMangakaDto) {
    try {
      return await this.prisma.mangaka.update({data: updateMangakaDto, where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.mangaka.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
