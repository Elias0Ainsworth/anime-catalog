import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnimeUserService } from './anime_user.service';
import { CreateAnimeUserDto } from './dto/create-anime_user.dto';

@Controller('anime-user')
export class AnimeUserController {
  constructor(private readonly animeUserService: AnimeUserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createAnimeUserDto: CreateAnimeUserDto, @Req() req: Request) {
    return this.animeUserService.create(createAnimeUserDto, req);
  }

  @Get()
  findMany(@Param('id') id: string) {
    return this.animeUserService.findMany(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.animeUserService.remove(+id, req);
  }
}
