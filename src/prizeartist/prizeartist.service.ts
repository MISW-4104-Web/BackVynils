import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Prize } from '../prize/prize.entity';
import { Artist } from '../artist/artist.entity';

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";


@Injectable()
export class PrizeArtistService {
    constructor(
        @InjectRepository(Prize)
        private readonly prizeRepository: Repository<Prize>,
        @InjectRepository(Artist)
        private readonly artistRepository: Repository<Artist>) { }

    async create(prizeId: number, artistId: number): Promise<Prize> {
        const prize = await this.prizeRepository.findOne(prizeId, { relations: ["artist"] });
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const artist = await this.artistRepository.findOne(artistId);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        prize.artist = artist;

        return await this.prizeRepository.save(prize);
    }

    async findArtistPrize(prizeId: number) {
        const prize = await this.prizeRepository.findOne(prizeId, { relations: ["artist"] });
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        if (!prize.artist)
            throw new BusinnesLogicException("The artist has not the prize", BusinessError.NOT_FOUND)

        return prize.artist;
    }

    async associateArtistPrize(prizeId: number, artistId: number) {
        const prize = await this.prizeRepository.findOne(prizeId, { relations: ["artist"] });
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const artist = await this.artistRepository.findOne(artistId);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        prize.artist = artist;

        return await this.prizeRepository.save(prize);
    }

    async deletePrizeArtist(id: number) {
        const prize = await this.prizeRepository.findOne(id, { relations: ["artist"] });

        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        prize.artist = null;

        return await this.prizeRepository.save(prize);
    }
}
