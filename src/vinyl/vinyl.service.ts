import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Vinyl } from './vinyl.entity';
import { VinylDto } from './vinyl.dto';

import { RecordLabel } from '../recordlabel/recordlabel.entity';

import {
    BusinnesLogicException, BusinessError
} from "../shared/errors/business-errors";

@Injectable()
export class VinylService {
    constructor(
        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>,
        @InjectRepository(RecordLabel)
        private readonly recordLabelRepository: Repository<RecordLabel>
    ) { }

    async findAll(): Promise<Vinyl[]> {
        return await this.vinylRepository.find();
    }

    async findOne(id: number): Promise<Vinyl> {
        const vinyl = await this.vinylRepository.findOne(id);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        return vinyl;
    }

    async create(vinylDto: VinylDto): Promise<Vinyl> {
        const recordLabel = await this.recordLabelRepository.findOne({ where: { id: vinylDto.recordLabel.id } });
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.PRECONDITION_FAILED)

        const newVinyl = new Vinyl();
        newVinyl.name = vinylDto.name;
        newVinyl.cover = vinylDto.cover;
        newVinyl.description = vinylDto.description;
        newVinyl.releaseDate = vinylDto.releaseDate;
        newVinyl.recordLabel = vinylDto.recordLabel;
        return await this.vinylRepository.save(newVinyl);
    }

    async update(id: number, vinylDto: VinylDto) {

        const vinyl = await this.vinylRepository.findOne(id);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const recordLabel = await this.recordLabelRepository.findOne({ where: { id: vinylDto.recordLabel.id } });
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.PRECONDITION_FAILED)

        vinyl.name = vinylDto.name;
        vinyl.cover = vinylDto.cover;
        vinyl.description = vinylDto.description;
        vinyl.releaseDate = vinylDto.releaseDate;
        vinyl.recordLabel = vinylDto.recordLabel;
        return this.vinylRepository.save(vinyl);
    }

    async delete(id: number) {
        const vinyl = await this.vinylRepository.findOne(id);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        return await this.vinylRepository.remove(vinyl);
    }
}
