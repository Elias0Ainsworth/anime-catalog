import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import AuthorizationDto from './dto/create-authorization.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthorizationService {
  constructor(private readonly prisma: PrismaService,
              private readonly jwtService: JwtService){}

  async validateUser(authDto: AuthorizationDto){
    try {
      const candidate: User = await this.prisma.user.findUnique({where: {email: authDto.email}});
      if(!candidate){
        throw new HttpException('This user is not exist', 404);
      }
      const hashPassword: boolean = await bcrypt.compare(authDto.password, candidate.password);
      if(!hashPassword){
        throw new HttpException("Wrong passsword", HttpStatus.FORBIDDEN);
      }
      return {id: candidate.id, email: candidate.email};
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async login(data: {id: number, email: string}){
    try {
      const role = await this.prisma.userRole.findMany({where: {user_id: data.id}});
      const roles = role.map(role => {
          return role.role_id;
      })
      const payload = {id: data.id, email: data.email, roles: roles};
      return this.jwtService.sign(payload);
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async registration(createUserDto: CreateUserDto){
    try {
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
  
        await this.prisma.userRole.create({data: {user_id: user.id, role_id: 2}});
      
      return user;
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}