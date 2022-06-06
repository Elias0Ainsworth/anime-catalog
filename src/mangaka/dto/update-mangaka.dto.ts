import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateMangakaDto } from './create-mangaka.dto';

export class UpdateMangakaDto extends PartialType(CreateMangakaDto) {

    @IsNotEmpty()
    @IsString()
    public name?: string;

    @IsNotEmpty()
    @IsNumber()
    public date?: number;

    @IsNotEmpty()
    @IsString()
    public description?: string;
}
