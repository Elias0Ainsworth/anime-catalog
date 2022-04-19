import { PartialType } from '@nestjs/mapped-types';
import { CreateMangakaDto } from './create-mangaka.dto';

export class UpdateMangakaDto extends PartialType(CreateMangakaDto) {
    public name?: string;
    public date?: number;
    public description?: string;
}
