import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Prize } from './prize.entity';
import { PrizeDto } from './prize.dto';

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class PrizeService {
    constructor(
        @InjectRepository(Prize)
        private readonly prizeRepository: Repository<Prize>) { }

    async findAll(): Promise<Prize[]> {
        return await this.prizeRepository.find();
    }

    async findOne(id: number): Promise<Prize> {
        const prize = await this.prizeRepository.findOne(id);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        return prize;
    }

    async create(prizeDto: PrizeDto): Promise<Prize> {

        let newPrize = new Prize();
        newPrize.name = prizeDto.name;
        newPrize.description = prizeDto.description
        newPrize.organization = prizeDto.organization;

        return await this.prizeRepository.save(newPrize)
    }

    async update(id: number, prizeDto: PrizeDto) {
        const prize = await this.prizeRepository.findOne(id);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        prize.name = prizeDto.name;
        prize.description = prizeDto.description;
        prize.organization = prizeDto.organization;

        return await this.prizeRepository.save(prize);
    }

    async delete(id: number) {
        const prize = await this.prizeRepository.findOne(id);

        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        return await this.prizeRepository.remove(prize);
    }

}
