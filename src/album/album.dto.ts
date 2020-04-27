import { GENRE } from "../genre/genre.enum";
import { RECORD_LABEL } from "../recordlabel/recordlabel.enum";

export class AlbumDTO {
    readonly id: number;
    readonly name: string;
    readonly cover: string;
    readonly releaseDate: Date;
    readonly description: string;
    readonly genre: GENRE;
    readonly recordLabel: RECORD_LABEL;
}