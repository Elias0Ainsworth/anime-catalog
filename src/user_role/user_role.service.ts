import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user_role.dto';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserRoleDto: CreateUserRoleDto) {
    try {
      return this.prisma.userRole.create({data: createUserRoleDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception')
    }
  }

  async findOne(id: number) {
   try {
      return this.prisma.userRole.findMany({
        where: {user_id: id},
        include: {userId: true,
                  roleId: true}
        });
   } catch (error) {
     throw new NotFoundException('Unknown Exception');
   }
  }

  async remove(id: number) {
    try {
      return this.prisma.userRole.delete({
        where: {user_id_role_id: {user_id: id, role_id: 1} }
      });
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
