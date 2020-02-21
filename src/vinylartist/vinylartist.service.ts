import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { Artist } from '../artist/artist.entity';
import { Vinyl } from '../vinyl/vinyl.entity';
import { ArtistDto } from '../artist/artist.dto';

@Injectable()
export class VinylArtistService {
    constructor(
        @InjectRepository(Artist)
        private readonly artistRepository: Repository<Artist>,

        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>) { }


    async findArtistsByVinylId(vinylId) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["artists"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        return vinyl.artists;
    }

    async findArtistsByVinylIdArtistId(vinylId, artistId) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["artists"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const artist = await this.artistRepository.findOne(artistId);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        const vinylartist = vinyl.artists.find(e => e.id = artist.id);

        if (!vinylartist)
            throw new BusinnesLogicException("The artist with the given is not associated to the vinyl", BusinessError.NOT_FOUND)

        return vinylartist;
    }

    async addVinylArtist(vinylId: number, artistId: number) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["artists"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const artist = await this.artistRepository.findOne(artistId);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        vinyl.artists = [artist]
        return await this.vinylRepository.save(vinyl);
    }

    async associateVinylArtist(vinylId: number, artistDto: ArtistDto[]) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["artists"] });

        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        let artists: Artist[] = [];

        for (let i = 0; i < artistDto.length; i++) {
            const artist = await this.artistRepository.findOne(artistDto[i].id);
            if (!artist)
                throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

            const newArtist = new Artist();
            newArtist.id = artistDto[i].id;
            newArtist.name = artistDto[i].name;
            newArtist.image = artistDto[i].image;
            newArtist.description = artistDto[i].description;
            newArtist.birthDate = artistDto[i].birthDate;
            artists.push(newArtist);
        }

        vinyl.artists = artists;
        return await this.vinylRepository.save(vinyl);
    }

    async deleteArtistToVinyl(vinylId: number, artistId: number) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["artists"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const artist = await this.artistRepository.findOne(artistId);
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        vinyl.artists = vinyl.artists.filter(e => {
            e.id !== artistId
        });

        return await this.vinylRepository.save(vinyl);
    }
}
