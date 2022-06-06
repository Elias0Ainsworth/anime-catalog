import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsEmpty, IsString, Max, Min } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsEmail()
    @IsEmpty()
    @IsString()
    public email?: string;

    @IsEmpty()
    @IsString()
    @Min(5)
    @Max(16)
    public password?: string;
}
