import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RolesGuard } from './role.guard';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RolesGuard],
  imports: [PrismaModule],
  exports: [RolesGuard]
})
export class RoleModule {}
