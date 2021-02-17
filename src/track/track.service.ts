import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { BusinessLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { Album } from "../album/album.entity";
import { Track } from "./track.entity";
import { TrackDTO } from "./track.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(Album)
        private readonly albumRepository: Repository<Album>,
        @InjectRepository(Track)
        private readonly trackRepository: Repository<Track>) { }

    async findTracks(id: number): Promise<TrackDTO[]> {
        const album = await this.albumRepository.findOne(id, { relations: ["tracks"] });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);

        return album.tracks;
    }

    async findOneTrack(albumId: number, trackId: number): Promise<TrackDTO> {
        const album = await this.albumRepository.findOne(albumId, { relations: ["tracks"] });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinessLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        return track;
    }

    async addTrackAlbum(albumId: number, trackDTO: TrackDTO): Promise<TrackDTO> {
        const album = await this.albumRepository.findOne(albumId);
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const track = new Track();
        track.name = trackDTO.name;
        track.duration = trackDTO.duration;
        track.album = album;

        return await this.trackRepository.save(track);
    }

    async update(albumId: number, trackId: number, trackDTO: TrackDTO): Promise<TrackDTO> {
        const album = await this.albumRepository.findOne(albumId, { relations: ["tracks"] });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinessLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        track.name = trackDTO.name;
        track.duration = trackDTO.duration;

        return await this.trackRepository.save(track);
    }

    async delete(albumId: number, trackId: number) {
        const album = await this.albumRepository.findOne(albumId, { relations: ["tracks"] });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinessLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        album.tracks = album.tracks.filter(e => e.id !== track.id);

        return await this.albumRepository.save(album);
    }
}
