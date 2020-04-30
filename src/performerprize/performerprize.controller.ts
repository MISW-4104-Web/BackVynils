import { Controller, Param, Body, UseInterceptors, Post, HttpCode, Get, Delete } from '@nestjs/common';
import { PerformerprizeService } from './performerprize.service';
import { PerformerPrizeDTO } from './performerprize.dto';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';

@Controller('prizes')
@UseInterceptors(BusinessErrorsInterceptor)
export class PerformerprizeController {

    constructor(private readonly performerPrizeService: PerformerprizeService) { }

    @Get(':prizeId/performers')
    async findArtistPrize(@Param('prizeId') prizeId) {
        return await this.performerPrizeService.findPerformerPrize(prizeId);
    }


    @Post(':prizeId/musicians/:musicianId')
    @HttpCode(200)
    async associateMusicianPrize(@Param('prizeId') prizeId: number, @Param('musicianId') musicianId: number, @Body() performerPrizeDTO: PerformerPrizeDTO) {
        return await this.performerPrizeService.associatePerformerPrize(prizeId, musicianId, performerPrizeDTO);
    }

    @Post(':prizeId/bands/:bandId')
    @HttpCode(200)
    async associateBandPrize(@Param('prizeId') prizeId: number, @Param('bandId') bandId: number, @Body() performerPrizeDTO: PerformerPrizeDTO) {
        return await this.performerPrizeService.associatePerformerPrize(prizeId, bandId, performerPrizeDTO);
    }

    @Delete(':prizeId/musicians/:musicianId')
    @HttpCode(204)
    async deletePrizeMusician(@Param('prizeId') prizeId: number, @Param('musicianId') musicianId: number) {
        return await this.performerPrizeService.deletePrizePerformer(prizeId, musicianId)
    }

    @Delete(':prizeId/bands/:bandId')
    @HttpCode(204)
    async deletePrizeBand(@Param('prizeId') prizeId: number, @Param('bandId') bandId: number) {
        return await this.performerPrizeService.deletePrizePerformer(prizeId, bandId)
    }
}
