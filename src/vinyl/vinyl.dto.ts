import { RecordLabel } from "src/recordlabel/recordlabel.entity";

export class VinylDto {
    readonly id: number;
    readonly name: string;
    readonly image: string;
    readonly isbn: string;
    readonly publishingDate: Date;
    readonly description: string;
    readonly recordLabel: RecordLabel;
}