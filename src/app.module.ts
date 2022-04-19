import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [UsersModule, PrismaModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
