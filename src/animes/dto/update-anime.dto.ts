import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDto } from './create-anime.dto';

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {
    public name?: string;
    public date?: number;
    public director_id?: number;
    public mangaka_id?: number;
    public description?: string;
    public image?: string;
}
