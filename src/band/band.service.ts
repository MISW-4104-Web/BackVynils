import { Injectable } from '@nestjs/common';
import { Band } from './band.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BandDTO } from './band.dto';
import { BusinnesLogicException, BusinessError } from '../shared/errors/business-errors';
import { Musician } from '../musician/musician.entity';

@Injectable()
export class BandService {
    constructor(
        @InjectRepository(Band)
        private readonly bandRepository: Repository<Band>,
        @InjectRepository(Musician)
        private readonly musicianRepository: Repository<Musician>
    ) { }

    async findAll(): Promise<BandDTO[]> {
        return await this.bandRepository.find({ relations: ["albums", "musicians", "performerPrizes"] });
    }

    async findOne(id: number): Promise<BandDTO> {
        const band = await this.bandRepository.findOne(id, { relations: ["albums", "musicians", "performerPrizes"] });
        if (!band)
            throw new BusinnesLogicException("The band with the given id was not found", BusinessError.NOT_FOUND)
        return band;
    }

    async create(bandDTO: BandDTO): Promise<BandDTO> {
        const band = new Band();
        band.name = bandDTO.name;
        band.image = bandDTO.image;
        band.description = bandDTO.description;
        band.creationDate = bandDTO.creationDate;
        return await this.bandRepository.save(band);
    }

    async update(id: number, bandDTO: BandDTO): Promise<BandDTO> {

        const band = await this.bandRepository.findOne(id);
        if (!band)
            throw new BusinnesLogicException("The band with the given id was not found", BusinessError.NOT_FOUND)
        else {
            band.name = bandDTO.name;
            band.image = bandDTO.image;
            band.description = bandDTO.description;
            band.creationDate = bandDTO.creationDate;
            await this.bandRepository.save(band);
        }
        return band;
    }

    async delete(id: number) {
        const band = await this.bandRepository.findOne(id);
        if (!band)
            throw new BusinnesLogicException("The band with the given id was not found", BusinessError.NOT_FOUND)
        return await this.bandRepository.remove(band);
    }

}
