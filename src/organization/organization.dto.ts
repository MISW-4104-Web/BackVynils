import { PrizeDto } from "src/prize/prize.dto";

export class OrganizationDto {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly prize: PrizeDto;
}