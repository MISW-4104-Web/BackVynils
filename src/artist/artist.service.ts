import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Artist } from './artist.entity';

import { ArtistDto } from "./artist.dto";

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class ArtistService {
    constructor(
        @InjectRepository(Artist)
        private readonly artistRepository: Repository<Artist>) { }

    async findAll(): Promise<Artist[]> {
        return await this.artistRepository.find();
    }

    async findOne(id: number): Promise<Artist> {
        const artist = await this.artistRepository.findOne(id);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)
        return artist;
    }

    async create(artistDto: ArtistDto): Promise<Artist> {
        const artist = new Artist();
        artist.name = artistDto.name;
        artist.image = artistDto.image;
        artist.description = artistDto.description;
        artist.birthDate = artistDto.birthDate;
        return await this.artistRepository.save(artist);
    }

    async update(id: number, artistDto: ArtistDto) {

        const artist = await this.artistRepository.findOne(id);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)
        else {
            artist.name = artistDto.name;
            artist.image = artistDto.image;
            artist.description = artistDto.description;
            artist.birthDate = artistDto.birthDate;
            await this.artistRepository.save(artist);
        }
        return artist;
    }

    async delete(id: number) {
        const artist = await this.artistRepository.findOne(id);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)
        return await this.artistRepository.remove(artist);
    }
}