import { PerformerDTO } from "../performer/performer.dto";

export class MusicianDTO extends PerformerDTO {

    readonly birthDate: Date;
}