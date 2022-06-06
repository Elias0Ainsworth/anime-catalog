import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenreAnimeService } from './genre_anime.service';
import { CreateGenreAnimeDto } from './dto/create-genre_anime.dto';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/utils/roles.enum';
import { RolesGuard } from 'src/role/role.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('genre-anime')
export class GenreAnimeController {
  constructor(private readonly genreAnimeService: GenreAnimeService) {}

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createGenreAnimeDto: CreateGenreAnimeDto) {
    return this.genreAnimeService.create(createGenreAnimeDto);
  }

  @Get()
  findMany(@Param('id') id: string) {
    return this.genreAnimeService.findMany(+id);
  }

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreAnimeService.remove(+id);
  }
}
