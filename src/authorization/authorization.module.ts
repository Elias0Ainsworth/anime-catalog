import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStratagy } from './jwt.straragy';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
  imports: [
    PrismaModule,
    PassportModule,
    PrismaModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions:{
        expiresIn: "1m"
      }
    }),
    JwtStratagy,
    UsersModule]
})
export class AuthorizationModule {}
