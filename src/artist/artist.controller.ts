import { Controller, Get, Post, Param, Put, Delete, Body, HttpCode, UseInterceptors } from '@nestjs/common';
import { ArtistDto } from './artist.dto';
import { ArtistService } from './artist.service';

import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

@Controller('artists')
@UseInterceptors(BusinessErrorsInterceptor)
export class ArtistController {

    constructor(private readonly artistService: ArtistService) { }

    @Get()
    async findAll() {
        return await this.artistService.findAll();
    }

    @Get(':artistId')
    async findOne(@Param('artistId') artistId) {
        return await this.artistService.findOne(artistId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() artistDto: ArtistDto) {
        return await this.artistService.create(artistDto);
    }

    @Put(':artistId')
    async update(@Param('artistId') artistId: number, @Body() artistDto: ArtistDto) {
        return await this.artistService.update(artistId, artistDto);
    }

    @Delete(':artistId')
    @HttpCode(204)
    async delete(@Param('artistId') artistId: number) {
        return await this.artistService.delete(artistId)
    }
}