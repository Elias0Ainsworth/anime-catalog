import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { UserRoleController } from './user_role.controller';

@Module({
  controllers: [UserRoleController],
  providers: [UserRoleService],
  imports: [PrismaModule]
})
export class UserRoleModule {}
