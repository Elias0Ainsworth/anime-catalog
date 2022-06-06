import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreAnimeDto } from './dto/create-genre_anime.dto';

@Injectable()
export class GenreAnimeService {
  constructor(private readonly prisma: PrismaService){}

  async create(createGenreAnimeDto: CreateGenreAnimeDto) {
    try {
      return await this.prisma.genreAnime.create({data: createGenreAnimeDto});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async findMany(id: number) {
    try {
      return this.prisma.genreAnime.findMany({where:{anime_id: id}});
    } catch (error) {
      throw new NotFoundException('Unknown Exception');
    }
  }

  async remove(id: number) {
    try {
       return await this.prisma.genreAnime.delete({
        where: {anime_id_genre_id: {genre_id: id, anime_id: id}}
      });
    } catch (error) {
      throw new NotFoundException('Unknown Exception'); 
    }
  }
}
