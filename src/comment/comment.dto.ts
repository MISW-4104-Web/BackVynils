import { CollectorDTO } from "../collector/collector.dto";

export class CommentDTO {
    readonly id: number;
    readonly description: string;
    readonly rating: number;
    readonly collector: CollectorDTO;
}