import { IsEmail, IsNotEmpty, IsString, } from "class-validator";

export class CreateUserDto {

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  public readonly email: string;

  @IsNotEmpty()
  @IsString()
  public readonly password: string;
}
