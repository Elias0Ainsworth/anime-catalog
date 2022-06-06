import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDirectorDto {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsNumber()
    public date: number;

    @IsNotEmpty()
    @IsString()
    public description?: string;
}
