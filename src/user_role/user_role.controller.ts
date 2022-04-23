import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { CreateUserRoleDto } from './dto/create-user_role.dto';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleService.create(createUserRoleDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRoleService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRoleService.remove(+id);
  }
}
