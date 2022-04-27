import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { GenreAnimeService } from './genre_anime.service';
import { GenreAnimeController } from './genre_anime.controller';

@Module({
  controllers: [GenreAnimeController],
  providers: [GenreAnimeService],
  imports: [PrismaModule]
})
export class GenreAnimeModule {}
