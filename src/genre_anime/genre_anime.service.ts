import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGenreAnimeDto } from './dto/create-genre_anime.dto';

@Injectable()
export class GenreAnimeService {
  constructor(private readonly prisma: PrismaService){}

  async create(createGenreAnimeDto: CreateGenreAnimeDto) {
    return await this.prisma.genreAnime.create({data: createGenreAnimeDto});
  }

  async findMany(id: number) {
    return this.prisma.genreAnime.findMany({where:{anime_id: id}});
  }

  async remove(id: number) {
    return await this.prisma.genreAnime.delete({where: {anime_id_genre_id: {genre_id: id, anime_id: id}}});
  }
}
