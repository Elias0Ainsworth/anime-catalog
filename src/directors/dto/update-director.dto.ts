import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDirectorDto } from './create-director.dto';

export class UpdateDirectorDto extends PartialType(CreateDirectorDto) {

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
