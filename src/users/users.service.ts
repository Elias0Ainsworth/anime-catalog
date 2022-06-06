import { PrismaService } from './../prisma/prisma.service';
import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  async findAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({where: {id}});
      const anime = await this.prisma.animeUser.findMany({
        where: {user_id: id},
        include: {animeId: true},
      });
      return {user: user, userAnime: anime};
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
    
    
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if(updateUserDto.password){
        const salt: string = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(updateUserDto.password, salt);
        updateUserDto.password = hashPassword;
      }
      return await this.prisma.user.update({data: updateUserDto, where: {id}})
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
