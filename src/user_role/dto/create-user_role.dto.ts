import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserRoleDto {

    @IsNotEmpty()
    @IsNumber()
    public user_id: number;

    @IsNotEmpty()
    @IsNumber()
    public role_id: number;
}
