import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Prize } from './prize.entity';
import { Organization } from '../organization/organization.entity';
import { PrizeDto } from './prize.dto';

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class PrizeService {
    constructor(
        @InjectRepository(Prize)
        private readonly prizeRepository: Repository<Prize>,
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>) { }

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

        if (!prizeDto.organization)
            throw new BusinnesLogicException("The organization is not valid", BusinessError.PRECONDITION_FAILED)

        const organization = await this.organizationRepository.findOne(prizeDto.organization.id, { relations: ["prize"] });
        if (!organization)
            throw new BusinnesLogicException("The organization with the given id was not found", BusinessError.NOT_FOUND)

        if (organization.prize)
            throw new BusinnesLogicException("The organization has a prize", BusinessError.PRECONDITION_FAILED)

        let newPrize = new Prize();
        newPrize.name = prizeDto.name;
        newPrize.description = prizeDto.description
        newPrize.premiationDate = prizeDto.premiationDate;
        newPrize.organization = organization;

        return await this.prizeRepository.save(newPrize)
    }

    async update(id: number, prizeDto: PrizeDto) {
        const prize = await this.prizeRepository.findOne(id);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        prize.name = prizeDto.name;
        prize.description = prizeDto.description;
        prize.premiationDate = prizeDto.premiationDate
        //prize.organization = prizeDto.organization;

        return await this.prizeRepository.save(prize);
    }

    async delete(id: number) {
        const prize = await this.prizeRepository.findOne(id, { relations: ["artist"] });

        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        if (prize.artist)
            throw new BusinnesLogicException("The prize has an associated artist", BusinessError.PRECONDITION_FAILED)

        return await this.prizeRepository.remove(prize);
    }

}
