import { IsNumber } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
export class CreateGenreAnimeDto {

    @IsNotEmpty()
    @IsNumber()
    public anime_id: number;

    @IsNotEmpty()
    @IsNumber()
    public genre_id: number;
}
