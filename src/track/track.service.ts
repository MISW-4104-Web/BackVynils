import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { Vinyl } from "../vinyl/vinyl.entity";
import { Track } from "./track.entity";
import { TrackDto } from "./track.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>,
        @InjectRepository(Track)
        private readonly trackRepository: Repository<Track>) { }

    async findTracks(id): Promise<Track[]> {
        const vinyl = await this.vinylRepository.findOne(id, { relations: ["tracks"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND);

        return vinyl.tracks;
    }

    async findOneTrack(vinylId, trackId): Promise<Track> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["tracks"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND);

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinnesLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        return track;
    }

    async addTrackVinyl(vinylId: number, trackDto: TrackDto): Promise<Track> {
        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const track = new Track();
        track.name = trackDto.name;
        track.duration = trackDto.duration;
        track.vinyl = vinyl;

        return await this.trackRepository.save(track);
    }

    async update(vinylId: number, trackId: number, trackDto: TrackDto): Promise<Track> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["tracks"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinnesLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        track.name = trackDto.name;
        track.duration = trackDto.duration;

        return await this.trackRepository.save(track);
    }

    async delete(vinylId: number, trackId: number): Promise<Vinyl> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["tracks"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const track = await this.trackRepository.findOne(trackId);
        if (!track)
            throw new BusinnesLogicException("The track with the given id was not found", BusinessError.NOT_FOUND);

        vinyl.tracks = vinyl.tracks.filter(e => e.id !== track.id);

        return await this.vinylRepository.save(vinyl);
    }
}
