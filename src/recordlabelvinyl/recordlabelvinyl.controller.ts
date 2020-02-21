import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Body, Put } from '@nestjs/common';
import { RecordLabelVinylService } from './recordlabelvinyl.service';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { VinylDto } from "../vinyl/vinyl.dto";

@Controller('recordLabels')
@UseInterceptors(BusinessErrorsInterceptor)
export class RecordLabelVinylController {

    constructor(private readonly recordLabelvinylService: RecordLabelVinylService) { }

    @Get(':recordLabelId/vinyls/')
    async findVinylsByRecordLabel(@Param('recordLabelId') recordLabelId) {
        return await this.recordLabelvinylService.findVinylsByRecordLabel(recordLabelId);
    }

    @Get(':recordLabelId/vinyls/:vinylId')
    async findVinylsByRecordLabelIdVinylId(@Param('recordLabelId') recordLabelId, @Param('vinylId') vinylId) {
        return await this.recordLabelvinylService.findVinylsByRecordLabelIdVinylId(recordLabelId, vinylId);
    }

    @Post(':recordLabelId/vinyls/:vinylId')
    @HttpCode(200)
    async addVinylRecordLabel(@Param('recordLabelId') recordLabelId: number, @Param('vinylId') vinylId: number) {
        return await this.recordLabelvinylService.addVinylRecordLabel(recordLabelId, vinylId);
    }

    @Put(':recordLabelId/vinyls/')
    async associateVinylRecordLabel(@Param('recordLabelId') recordLabelId: number,
        @Body() vinylDto: VinylDto[]) {
        return await this.recordLabelvinylService.associateVinylRecordLabel(recordLabelId, vinylDto);
    }

}
