import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prize } from '../prize/prize.entity';
import { Repository } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { BusinnesLogicException, BusinessError } from '../shared/errors/business-errors';
import { PerformerPrizeDTO } from './performerprize.dto';
import { PerformerPrize } from './performerprize.entity';
import { throws } from 'assert';

@Injectable()
export class PerformerprizeService {

    constructor(
        @InjectRepository(Prize)
        private readonly prizeRepository: Repository<Prize>,
        @InjectRepository(Performer)
        private readonly performerRepository: Repository<Performer>,
        @InjectRepository(PerformerPrize)
        private readonly performerPrizeRepository: Repository<PerformerPrize>,
    ) { }

    async findPerformerPrize(prizeId: number) {
        const prize = await this.prizeRepository.findOne(prizeId);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performerPrize = await this.performerPrizeRepository.find({ where: { prizeId }, relations: ["performer"] })

        return performerPrize;
    }

    async associatePerformerPrize(prizeId: number, performerId: number, performerPrizeDTO: PerformerPrizeDTO) {
        const prize = await this.prizeRepository.findOne(prizeId);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performer = await this.performerRepository.findOne(performerId);
        if (!performer)
            throw new BusinnesLogicException("The performer with the given id was not found", BusinessError.NOT_FOUND)

        const performerPrize = new PerformerPrize();
        performerPrize.premiationDate = performerPrizeDTO.premiationDate;
        performerPrize.prize = prize;
        performerPrize.performer = performer;

        return await this.performerPrizeRepository.save(performerPrize);
    }

    async deletePrizePerformer(prizeId: number, performerId: number) {

        const prize = await this.prizeRepository.findOne(prizeId);
        if (!prize)
            throw new BusinnesLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performer = await this.performerRepository.findOne(performerId);
        if (!performer)
            throw new BusinnesLogicException("The performer with the given id was not found", BusinessError.NOT_FOUND)

        const performerprize = await this.performerPrizeRepository.findOne({ where: { prizeId, performerId } });
        return await this.performerPrizeRepository.remove(performerprize);

    }

}
