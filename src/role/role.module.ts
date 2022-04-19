import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [PrismaModule]
})
export class RoleModule {}
