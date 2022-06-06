import { CreateUserDto } from './../users/dto/create-user.dto';
import { AuthorizationService } from './authorization.service';
import { Controller, Post, Body } from '@nestjs/common';
import AuthorizationDto from './dto/create-authorization.dto';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService){}

  @Post('login')
  async login(@Body() authDto: AuthorizationDto){
    const data = await this.authService.validateUser(authDto);
    return this.authService.login(data);
  }

  @Post('registration')
  async registration(@Body() createUserDto: CreateUserDto){
    return this.authService.registration(createUserDto);
  }
}
