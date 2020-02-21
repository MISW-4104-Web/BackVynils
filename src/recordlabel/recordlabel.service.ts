import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecordLabel } from './recordlabel.entity';
import { RecordLabelDto } from "./recordlabel.dto";

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class RecordLabelService {
    constructor(
        @InjectRepository(RecordLabel)
        private readonly recordLabelRepository: Repository<RecordLabel>) { }

    async findAll(): Promise<RecordLabel[]> {
        return await this.recordLabelRepository.find();
    }

    async findOne(id: number): Promise<RecordLabel> {
        const recordLabel = await this.recordLabelRepository.findOne(id);
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        return recordLabel
    }

    async create(recordLabelDto: RecordLabelDto): Promise<RecordLabel> {
        const recordLabel = await this.recordLabelRepository.findOne({ where: { name: recordLabelDto.name } })
        if (recordLabel)
            throw new BusinnesLogicException("There is an record label with the same name", BusinessError.PRECONDITION_FAILED)

        const newRecordLabel = new RecordLabel();
        newRecordLabel.name = recordLabelDto.name;
        return await this.recordLabelRepository.save(newRecordLabel);
    }

    async update(id: number, recordLabelDto: RecordLabelDto) {
        const recordLabel = await this.recordLabelRepository.findOne(id);
        if (!recordLabel)
            throw new BusinnesLogicException("The record label with the given id was not found", BusinessError.NOT_FOUND)

        recordLabel.name = recordLabelDto.name;
        return await this.recordLabelRepository.save(recordLabel);

    }

    async delete(id: number) {
        const recordLabel = await this.recordLabelRepository.findOne(id, { relations: ["vinyls"] });

        if (!recordLabel)
            throw new BusinnesLogicException("The recordLabel with the given id was not found", BusinessError.NOT_FOUND)
        else if (recordLabel.vinyls.length !== 0)
            throw new BusinnesLogicException("The recordLabel has vinyls", BusinessError.PRECONDITION_FAILED)

        return await this.recordLabelRepository.remove(recordLabel);
    }
}
