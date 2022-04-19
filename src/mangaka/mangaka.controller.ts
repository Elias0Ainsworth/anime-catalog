import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MangakaService } from './mangaka.service';
import { CreateMangakaDto } from './dto/create-mangaka.dto';
import { UpdateMangakaDto } from './dto/update-mangaka.dto';

@Controller('mangaka')
export class MangakaController {
  constructor(private readonly mangakaService: MangakaService) {}

  @Post()
  create(@Body() createMangakaDto: CreateMangakaDto) {
    return this.mangakaService.create(createMangakaDto);
  }

  @Get()
  findAll() {
    return this.mangakaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mangakaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangakaDto: UpdateMangakaDto) {
    return this.mangakaService.update(+id, updateMangakaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangakaService.remove(+id);
  }
}
