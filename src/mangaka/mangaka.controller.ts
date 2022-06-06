import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MangakaService } from './mangaka.service';
import { CreateMangakaDto } from './dto/create-mangaka.dto';
import { UpdateMangakaDto } from './dto/update-mangaka.dto';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/utils/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/role/role.guard';

@Controller('mangaka')
export class MangakaController {
  constructor(private readonly mangakaService: MangakaService) {}

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
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

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangakaDto: UpdateMangakaDto) {
    return this.mangakaService.update(+id, updateMangakaDto);
  }

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangakaService.remove(+id);
  }
}
