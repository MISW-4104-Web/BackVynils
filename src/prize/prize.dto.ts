import { OrganizationDto } from "src/organization/organization.dto";
import { ArtistDto } from "src/artist/artist.dto";

export class PrizeDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly premiationDate: Date;
    readonly organization: OrganizationDto;
    readonly artist: ArtistDto;
}