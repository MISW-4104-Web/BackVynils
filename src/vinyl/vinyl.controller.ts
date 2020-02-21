import { Controller, Get, Post, Param, Put, Delete, Body, HttpCode, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";
import { VinylDto } from './vinyl.dto';
import { VinylService } from './vinyl.service';

@Controller('vinyls')
@UseInterceptors(BusinessErrorsInterceptor)
export class VinylController {
    constructor(private readonly vinylService: VinylService) { }

    @Get()
    async findAll() {
        return await this.vinylService.findAll();
    }

    @Get(':vinylId')
    async findOne(@Param('vinylId') vinylId) {
        return await this.vinylService.findOne(vinylId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() vinylDto: VinylDto) {
        return await this.vinylService.create(vinylDto);
    }

    @Put(':vinylId')
    async update(@Param('vinylId') vinylId: number, @Body() vinylDto: VinylDto) {
        return await this.vinylService.update(vinylId, vinylDto);
    }

    @Delete(':vinylId')
    @HttpCode(204)
    async delete(@Param('vinylId') vinylId: number) {
        return await this.vinylService.delete(vinylId)
    }
}

