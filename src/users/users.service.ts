import { PrismaService } from './../prisma/prisma.service';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const candidate = await this.prisma.user.findUnique({
      where : { 
        email: createUserDto.email 
      }});

    if(candidate){
      throw new HttpException('Email is already exist', 400)
    }
    const salt: string = await bcrypt.genSalt(); 
    const hashPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.prisma.user.create({
      data : {
        email: createUserDto.email,
        password: hashPassword,
      }});
    
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({where: {id}});
    
    
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if(updateUserDto.password){
      const salt: string = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(updateUserDto.password, salt);
      updateUserDto.password = hashPassword;
    }
    return await this.prisma.user.update({data: updateUserDto, where: {id}})
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id}});
  }
}
