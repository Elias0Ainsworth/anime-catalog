import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user_role.dto';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserRoleDto: CreateUserRoleDto) {
    return this.prisma.userRole.create({data: createUserRoleDto});
  }

  async findOne(id: number) {
    return this.prisma.userRole.findMany({where: {user_id: id}});
  }

  async remove(id: number) {
    return this.prisma.userRole.delete({where: {user_id_role_id: {user_id: id, role_id: 1} }});
  }
}
