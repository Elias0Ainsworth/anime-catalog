import { IsNotEmpty, IsString } from "class-validator";

export default class AuthorizationDto {

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}