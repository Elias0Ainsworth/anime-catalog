import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAnimeUserDto } from './dto/create-anime_user.dto';

@Injectable()
export class AnimeUserService {
  constructor(private readonly prisma: PrismaService){}

  create(createAnimeUserDto: CreateAnimeUserDto) {
    return this.prisma.animeUser.create({data: createAnimeUserDto});
  }

  findMany(id: number) {
    return this.prisma.animeUser.findMany({where: {user_id: id}});
  }

  remove(id: number) {
    return this.prisma.animeUser.delete({where:{anime_id_user_id: {anime_id: id, user_id: id}}});
  }
}
