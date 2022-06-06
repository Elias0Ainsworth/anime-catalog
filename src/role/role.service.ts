import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {

  constructor(private readonly prisma: PrismaService){}

  async create(createRoleDto: CreateRoleDto) {
    try {
      return await this.prisma.role.create({data: createRoleDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findAll() {
    try {
      return await this.prisma.role.findMany();
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.role.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
