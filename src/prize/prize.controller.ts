import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { PrizeService } from "./prize.service";
import { PrizeDTO } from "./prize.dto"

@Controller('prizes')
@UseInterceptors(BusinessErrorsInterceptor)
export class PrizeController {
    constructor(private readonly prizeService: PrizeService) { }

    @Get()
    async findAll() {
        return await this.prizeService.findAll();
    }

    @Get(':prizeId')
    async findOne(@Param('prizeId') prizeId: number) {
        return await this.prizeService.findOne(prizeId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() prizeDTO: PrizeDTO) {
        return await this.prizeService.create(prizeDTO);
    }

    @Put(':prizeId')
    async update(@Param('prizeId') prizeId: number, @Body() prizeDTO: PrizeDTO) {
        return await this.prizeService.update(prizeId, prizeDTO);
    }

    @Delete(':prizeId')
    @HttpCode(204)
    async delete(@Param('prizeId') prizeId: number) {
        return await this.prizeService.delete(prizeId)
    }
}
