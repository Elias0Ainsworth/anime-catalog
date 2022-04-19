import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MangakaService } from './mangaka.service';
import { MangakaController } from './mangaka.controller';

@Module({
  controllers: [MangakaController],
  providers: [MangakaService],
  imports: [PrismaModule]
})
export class MangakaModule {}
