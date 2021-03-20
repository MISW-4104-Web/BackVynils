import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { BandService } from './band.service';
import { BandDTO } from './band.dto';

@Controller('bands')
@UseInterceptors(BusinessErrorsInterceptor)
export class BandController {
    constructor(private readonly bandService: BandService) { }

    @Get()
    async findAll() {
        return await this.bandService.findAll();
    }

    @Get(':bandId')
    async findOne(@Param('bandId') bandId: number) {
        return await this.bandService.findOne(bandId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() bandDTO: BandDTO) {
        return await this.bandService.create(bandDTO);
    }

    @Put(':bandId')
    async update(@Param('bandId') bandId: number, @Body() bandDTO: BandDTO) {
        return await this.bandService.update(bandId, bandDTO);
    }

    @Delete(':bandId')
    @HttpCode(204)
    async delete(@Param('bandId') bandId: number) {
        return await this.bandService.delete(bandId)
    }
}
