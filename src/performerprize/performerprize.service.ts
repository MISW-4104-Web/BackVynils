import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prize } from '../prize/prize.entity';
import { Repository } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors';
import { PerformerPrizeDTO } from './performerprize.dto';
import { PerformerPrize } from './performerprize.entity';
import * as Joi from "joi";
import { validate } from "../shared/validation";

@Injectable()
export class PerformerPrizeService {

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
            throw new BusinessLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performerPrize = await this.performerPrizeRepository.find({ relations: ["performer", "prize"] })
        
        return performerPrize.filter(p => p.prize.id == prizeId)
    }

    async associatePerformerPrize(prizeId: number, performerId: number, performerPrizeDTO: PerformerPrizeDTO) {
        const prize = await this.prizeRepository.findOne(prizeId);
        if (!prize)
            throw new BusinessLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performer = await this.performerRepository.findOne(performerId);
        if (!performer)
            throw new BusinessLogicException("The performer with the given id was not found", BusinessError.NOT_FOUND)

        const { error } = validate(this.schema, performerPrizeDTO);
        if(error){
            throw new BusinessLogicException(error.toString(), BusinessError.BAD_REQUEST)
        } else {
            const performerPrize = new PerformerPrize();
            performerPrize.premiationDate = performerPrizeDTO.premiationDate;
            performerPrize.prize = prize;
            performerPrize.performer = performer;

            return await this.performerPrizeRepository.save(performerPrize);
        }
    }

    async deletePrizePerformer(prizeId: number, performerId: number) {

        const prize = await this.prizeRepository.findOne(prizeId);
        if (!prize)
            throw new BusinessLogicException("The prize with the given id was not found", BusinessError.NOT_FOUND)

        const performer = await this.performerRepository.findOne(performerId);
        if (!performer)
            throw new BusinessLogicException("The performer with the given id was not found", BusinessError.NOT_FOUND)

        const performerprize = await this.performerPrizeRepository.findOne({ where: { prizeId, performerId }, relations: ["performer"] });

        return await this.performerPrizeRepository.remove(performerprize);

    }

    async findAll(): Promise<PerformerPrizeDTO[]> {
        return await this.performerPrizeRepository.find({ relations: ["prize"] });
    }

    schema = Joi.object({ 
        premiationDate: Joi.date()
    })

}
