import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateGenreDto } from './create-genre.dto';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {

    @IsNotEmpty()
    @IsString()
    public description?: string;

    @IsNotEmpty()
    @IsString()
    public name?: string;
}
