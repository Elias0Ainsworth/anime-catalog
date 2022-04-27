import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenreAnimeService } from './genre_anime.service';
import { CreateGenreAnimeDto } from './dto/create-genre_anime.dto';

@Controller('genre-anime')
export class GenreAnimeController {
  constructor(private readonly genreAnimeService: GenreAnimeService) {}

  @Post()
  create(@Body() createGenreAnimeDto: CreateGenreAnimeDto) {
    return this.genreAnimeService.create(createGenreAnimeDto);
  }

  @Get()
  findMany(@Param('id') id: string) {
    return this.genreAnimeService.findMany(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreAnimeService.remove(+id);
  }
}
