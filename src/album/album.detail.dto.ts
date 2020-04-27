import { AlbumDTO } from "./album.dto";
import { TrackDTO } from "../track/track.dto";
import { CommentDTO } from "../comment/comment.dto";
import { PerformerDTO } from "../performer/performer.dto";

export class AlbumDetailDTO extends AlbumDTO {
    readonly tracks: TrackDTO[];
    readonly comments: CommentDTO[];
    readonly performers: PerformerDTO[];
}