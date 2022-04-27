import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimeUserService } from './anime_user.service';
import { CreateAnimeUserDto } from './dto/create-anime_user.dto';

@Controller('anime-user')
export class AnimeUserController {
  constructor(private readonly animeUserService: AnimeUserService) {}

  @Post()
  create(@Body() createAnimeUserDto: CreateAnimeUserDto) {
    return this.animeUserService.create(createAnimeUserDto);
  }

  @Get()
  findMany(@Param('id') id: string) {
    return this.animeUserService.findMany(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeUserService.remove(+id);
  }
}
