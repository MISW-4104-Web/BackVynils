import { Controller, Post, HttpCode, Param, UseInterceptors, Get, Delete } from '@nestjs/common';
import { CollectorPerformerService } from './collectorperformer.service';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';

@Controller('collectors')
@UseInterceptors(BusinessErrorsInterceptor)
export class CollectorPerformerController {
    constructor(private readonly collectorPerformerService: CollectorPerformerService) { }

    @Get(':collectorId/performers')
    async getPerformersByCollectorId(@Param('collectorId') collectorId: number) {
        return await this.collectorPerformerService.getPerformersByCollectorId(collectorId);
    }

    @Post(':collectorId/bands/:bandId')
    @HttpCode(200)
    async associateCollectorBand(@Param('collectorId') collectorId: number, @Param('bandId') bandId: number) {
        return await this.collectorPerformerService.associateCollectorPerformer(collectorId, bandId);
    }

    @Post(':collectorId/musicians/:musicianId')
    @HttpCode(200)
    async associateCollectorMusician(@Param('collectorId') collectorId: number, @Param('musicianId') musicianId: number) {
        return await this.collectorPerformerService.associateCollectorPerformer(collectorId, musicianId);
    }

    @Delete(':collectorId/musicians/:musicianId')
    @HttpCode(204)
    async deleteCollectorMusician(@Param('collectorId') collectorId: number,
        @Param('musicianId') musicianId: number) {
        return await this.collectorPerformerService.deleteCollectorPerformer(collectorId, musicianId);
    }

    @Delete(':collectorId/bands/:bandId')
    @HttpCode(204)
    async deleteCollectorBand(@Param('collectorId') collectorId: number,
        @Param('bandId') bandId: number) {
        return await this.collectorPerformerService.deleteCollectorPerformer(collectorId, bandId);
    }

}
