import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { TrackDto } from "./track.dto";
import { TrackService } from "./track.service";

@Controller('vinyls')
@UseInterceptors(BusinessErrorsInterceptor)
export class TrackController {
    constructor(private readonly trackService: TrackService) { }

    @Get(':vinylId/tracks')
    async findTracks(@Param('vinylId') vinylId) {
        return await this.trackService.findTracks(vinylId);
    }

    @Get(':vinylId/tracks/:trackId')
    async findOneTrack(@Param('vinylId') vinylId, @Param('trackId') trackId) {
        return await this.trackService.findOneTrack(vinylId, trackId);
    }

    @Post(':vinylId/tracks')
    @HttpCode(200)
    async addTrackVinyl(@Param('vinylId') vinylId, @Body() trackDto: TrackDto) {
        return await this.trackService.addTrackVinyl(vinylId, trackDto);
    }

    @Put(':vinylId/tracks/:trackId')
    async update(@Param('vinylId') vinylId: number, @Param('trackId') trackId: number, @Body() trackDto: TrackDto) {
        return await this.trackService.update(vinylId, trackId, trackDto);
    }


    @Delete(':vinylId/tracks/:trackId')
    @HttpCode(204)
    async delete(@Param('vinylId') vinylId: number, @Param('trackId') trackId: number) {
        return await this.trackService.delete(vinylId, trackId)
    }
}
