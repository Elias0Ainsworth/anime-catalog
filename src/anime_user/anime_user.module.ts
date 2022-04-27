import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AnimeUserService } from './anime_user.service';
import { AnimeUserController } from './anime_user.controller';

@Module({
  controllers: [AnimeUserController],
  providers: [AnimeUserService],
  imports: [PrismaModule]
})
export class AnimeUserModule {}
