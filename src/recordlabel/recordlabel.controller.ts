import { Controller, Get, Post, Param, Put, Delete, Body, HttpCode, UseInterceptors } from '@nestjs/common';
import { RecordLabelService } from './recordlabel.service';
import { RecordLabelDto } from './recordlabel.dto';

import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

@Controller('recordlabels')
@UseInterceptors(BusinessErrorsInterceptor)
export class RecordLabelController {
    constructor(private readonly recordLabelService: RecordLabelService) { }

    @Get()
    async findAll() {
        return await this.recordLabelService.findAll();
    }

    @Get(':recordLabelId')
    async findOne(@Param('recordLabelId') recordLabelId) {
        return await this.recordLabelService.findOne(recordLabelId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() recordLabelDto: RecordLabelDto) {
        return await this.recordLabelService.create(recordLabelDto);
    }

    @Put(':recordLabelId')
    async update(@Param('recordLabelId') recordLabelId: number, @Body() recordLabelDto: RecordLabelDto) {
        return await this.recordLabelService.update(recordLabelId, recordLabelDto);
    }

    @Delete(':recordLabelId')
    @HttpCode(204)
    async delete(@Param('recordLabelId') recordLabelId: number) {
        return await this.recordLabelService.delete(recordLabelId)
    }

}
