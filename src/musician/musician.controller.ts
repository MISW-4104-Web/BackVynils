import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { MusicianService } from './musician.service';
import { MusicianDTO } from './musician.dto';

@Controller('musicians')
@UseInterceptors(BusinessErrorsInterceptor)
export class MusicianController {
    constructor(private readonly musicianService: MusicianService) { }

    @Get()
    async findAll() {
        return await this.musicianService.findAll();
    }

    @Get(':musicianId')
    async findOne(@Param('musicianId') musicianId: number) {
        return await this.musicianService.findOne(musicianId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() musicianDTO: MusicianDTO) {
        return await this.musicianService.create(musicianDTO);
    }

    @Put(':musicianId')
    async update(@Param('musicianId') musicianId: number, @Body() musicianDTO: MusicianDTO) {
        return await this.musicianService.update(musicianId, musicianDTO);
    }

    @Delete(':musicianId')
    @HttpCode(204)
    async delete(@Param('musicianId') musicianId: number) {
        return await this.musicianService.delete(musicianId)
    }
}
