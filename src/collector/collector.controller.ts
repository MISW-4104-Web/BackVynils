import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { CollectorService } from './collector.service';
import { CollectorDTO } from './collector.dto';

@Controller('collectors')
@UseInterceptors(BusinessErrorsInterceptor)
export class CollectorController {
    constructor(private readonly collectorService: CollectorService) { }

    @Get()
    async findAll() {
        return await this.collectorService.findAll();
    }

    @Get(':collectorId')
    async findOne(@Param('collectorId') collectorId: number) {
        return await this.collectorService.findOne(collectorId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() collectorDTO: CollectorDTO) {
        return await this.collectorService.create(collectorDTO);
    }

    @Put(':collectorId')
    async update(@Param('collectorId') collectorId: number, @Body() collectorDTO: CollectorDTO) {
        return await this.collectorService.update(collectorId, collectorDTO);
    }

    @Delete(':collectorId')
    @HttpCode(204)
    async delete(@Param('collectorId') collectorId: number) {
        return await this.collectorService.delete(collectorId)
    }
}
