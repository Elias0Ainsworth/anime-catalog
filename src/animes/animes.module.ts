import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesController } from './animes.controller';

@Module({
  controllers: [AnimesController],
  providers: [AnimesService],
  imports: [PrismaModule]
})
export class AnimesModule {}
