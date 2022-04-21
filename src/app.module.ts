import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { AnimesModule } from './animes/animes.module';
import { MangakaModule } from './mangaka/mangaka.module';
import { DirectorsModule } from './directors/directors.module';

@Module({
  imports: [UsersModule, PrismaModule, RoleModule, AnimesModule, MangakaModule, DirectorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
