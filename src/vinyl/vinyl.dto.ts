import { RecordLabel } from "src/recordlabel/recordlabel.entity";

export class VinylDto {
    readonly id: number;
    readonly name: string;
    readonly cover: string;
    readonly description: string;
    readonly releaseDate: Date;
    readonly recordLabel: RecordLabel;
}