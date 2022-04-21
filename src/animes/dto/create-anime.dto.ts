import { Director, Mangaka } from '@prisma/client';
export class CreateAnimeDto {
    public name: string;
    public date: number;
    public director_id: number;
    public mangaka_id: number;
    public description?: string;
    public image?: string;

}
