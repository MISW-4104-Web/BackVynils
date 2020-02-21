import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { RecordLabel } from '../recordlabel/recordlabel.entity';
import { Vinyl } from '../vinyl/vinyl.entity';
import { VinylDto } from "../vinyl/vinyl.dto";
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class RecordLabelVinylService {

    constructor(
        @InjectRepository(RecordLabel)
        private readonly recordLabelRepository: Repository<RecordLabel>,

        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>) { }

    async addVinylRecordLabel(recordLabelId: number, vinylId: number) {

        const recordLabel = await this.recordLabelRepository.findOne(recordLabelId);
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        recordLabel.vinyls = [vinyl];

        return await this.recordLabelRepository.save(recordLabel);
    }

    async findVinylsByRecordLabel(recordLabelId) {
        const recordLabel = await this.recordLabelRepository.findOne(recordLabelId, { relations: ["vinyls"] });
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        return recordLabel.vinyls;
    }

    async findVinylsByRecordLabelIdVinylId(recordLabelId, vinylId) {
        const recordLabel = await this.recordLabelRepository.findOne(recordLabelId, { relations: ["vinyls"] });
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const recordLabelvinyl = recordLabel.vinyls.find(e => e.id === vinyl.id)

        if (!recordLabelvinyl) {
            throw new BusinnesLogicException("The vinyl is not associated to the recordLabel", BusinessError.PRECONDITION_FAILED)
        }

        return recordLabelvinyl;
    }

    async associateVinylRecordLabel(recordLabelId: number, vinylDto: VinylDto[]) {
        const recordLabel = await this.recordLabelRepository.findOne(recordLabelId, { relations: ["vinyls"] });

        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        let vinyls: Vinyl[] = [];

        for (let i = 0; i < vinylDto.length; i++) {
            const vinyl = await this.vinylRepository.findOne(vinylDto[i].id);
            if (!vinyl)
                throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

            const newVinyl = new Vinyl();
            newVinyl.id = vinylDto[i].id;
            newVinyl.name = vinylDto[i].name;
            newVinyl.image = vinylDto[i].image;
            newVinyl.description = vinylDto[i].description;
            newVinyl.publishingDate = vinylDto[i].publishingDate;
            newVinyl.isbn = vinylDto[i].isbn;
            vinyls.push(newVinyl);
        }
        recordLabel.vinyls = vinyls;
        return await this.recordLabelRepository.save(recordLabel);
    }
}
