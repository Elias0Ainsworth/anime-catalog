import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {

  constructor(private readonly prisma: PrismaService){}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({data: createRoleDto});
  }

  async findAll() {
    return await this.prisma.role.findMany();
  }

  async remove(id: number) {
    return await this.prisma.role.delete({where: {id}});
  }
}
