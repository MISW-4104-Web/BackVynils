import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { RecordLabel } from '../recordlabel/recordlabel.entity'
import { Vinyl } from '../vinyl/vinyl.entity';
import { RecordLabelDto } from '../recordlabel/recordlabel.dto';

@Injectable()
export class VinylRecordLabelService {
    constructor(
        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>,

        @InjectRepository(RecordLabel)
        private readonly recordLabelRepository: Repository<RecordLabel>) { }

    async associateVinylRecordLabel(vinylId: number, recordLabelDto: RecordLabelDto) {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["recordLabel"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const recordLabel = await this.recordLabelRepository.findOne(recordLabelDto.id);
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        vinyl.recordLabel = recordLabel;

        return await this.vinylRepository.save(vinyl);
    }
}
