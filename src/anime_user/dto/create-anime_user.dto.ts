import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAnimeUserDto {

    @IsNotEmpty()
    @IsNumber()
    public anime_id: number;
}
