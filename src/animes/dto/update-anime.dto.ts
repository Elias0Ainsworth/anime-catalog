import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDto } from './create-anime.dto';

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {

    @IsNotEmpty()
    @IsString()
    public name?: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(4)
    @Max(4)
    public date?: number;

    @IsNotEmpty()
    @IsNumber()
    public director_id?: number;

    @IsNotEmpty()
    @IsNumber()
    public mangaka_id?: number;

    @IsNotEmpty()
    @IsString()
    public description?: string;

    @IsNotEmpty()
    @IsString()
    public image?: string;
}
