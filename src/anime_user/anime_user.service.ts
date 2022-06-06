import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateAnimeUserDto } from './dto/create-anime_user.dto';

@Injectable()
export class AnimeUserService {
  constructor(private readonly prisma: PrismaService){}

  create(createAnimeUserDto: CreateAnimeUserDto, req) {
    try {
      return this.prisma.animeUser.create({data: {anime_id: createAnimeUserDto.anime_id, user_id: req.user.id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  findMany(id: number) {
    try {
      return this.prisma.animeUser.findMany({where: {user_id: id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  remove(id: number, req) {
    try {
      return this.prisma.animeUser.delete({where:{anime_id_user_id: {anime_id: id, user_id: req.user.id}}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }
}
