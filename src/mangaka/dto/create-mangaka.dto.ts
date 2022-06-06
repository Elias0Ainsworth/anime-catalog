import { IsNumber } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateMangakaDto {

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
