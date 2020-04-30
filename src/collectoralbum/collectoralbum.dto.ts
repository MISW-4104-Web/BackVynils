import { ALBUM_STATUS } from "../albumstatus/albumstatus.enum";
import { AlbumDTO } from "../album/album.dto";

export class CollectorAlbumDTO {
    readonly id: number;
    readonly price: number;
    readonly status: ALBUM_STATUS;
    readonly album: AlbumDTO;
}