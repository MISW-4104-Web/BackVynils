import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { Artist } from '../artist/artist.entity';
import { Vinyl } from '../vinyl/vinyl.entity';
import { VinylDto } from '../vinyl/vinyl.dto';

@Injectable()
export class ArtistVinylService {
    constructor(
        @InjectRepository(Artist)
        private readonly artistRepository: Repository<Artist>,

        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>) { }

    async findVinylsByArtistIdVinylId(artistId, vinylId) {
        const artist = await this.artistRepository.findOne(artistId, { relations: ["vinyls"] });
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const artistvinyl = artist.vinyls.find(e => e.id === vinyl.id);

        if (!artistvinyl)
            throw new BusinnesLogicException("The vinyl with the given is not associated to the artist", BusinessError.PRECONDITION_FAILED)

        return artistvinyl;
    }

    async findVinylsByArtistId(artistId) {
        const artist = await this.artistRepository.findOne(artistId, { relations: ["vinyls"] });
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        return artist.vinyls;
    }

    async addArtistVinyl(artistId: number, vinylId: number): Promise<Artist> {
        const artist = await this.artistRepository.findOne(artistId, { relations: ["vinyls"] });
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        artist.vinyls = [vinyl];
        return await this.artistRepository.save(artist);
    }

    async associateArtistVinyl(artistId: number, vinylDto: VinylDto[]): Promise<Artist> {
        const artist = await this.artistRepository.findOne(artistId, { relations: ["vinyls"] });

        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        let vinyls: Vinyl[] = [];

        for (let i = 0; i < vinylDto.length; i++) {
            const vinyl = await this.vinylRepository.findOne(vinylDto[i].id);
            if (!vinyl)
                throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

            const newVinyl = new Vinyl();
            newVinyl.id = vinylDto[i].id;
            newVinyl.name = vinylDto[i].name;
            newVinyl.cover = vinylDto[i].cover;
            newVinyl.description = vinylDto[i].description;
            newVinyl.releaseDate = vinylDto[i].releaseDate;
            vinyls.push(newVinyl);
        }

        artist.vinyls = vinyls;
        return await this.artistRepository.save(artist);
    }

    async deleteVinylToArtist(artistId: number, vinylId: number): Promise<Artist> {
        const artist = await this.artistRepository.findOne(artistId, { relations: ["vinyls"] });
        if (!artist)
            throw new BusinnesLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND)

        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        artist.vinyls = artist.vinyls.filter(e => {
            e.id !== vinylId
        });

        return await this.artistRepository.save(artist);
    }
}
