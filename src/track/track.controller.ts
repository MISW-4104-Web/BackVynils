import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { TrackDTO } from "./track.dto";
import { TrackService } from "./track.service";

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class TrackController {
    constructor(private readonly trackService: TrackService) { }

    @Get(':albumId/tracks')
    async findTracks(@Param('albumId') albumId: number) {
        return await this.trackService.findTracks(albumId);
    }

    @Get(':albumId/tracks/:trackId')
    async findOneTrack(@Param('albumId') albumId: number, @Param('trackId') trackId: number) {
        return await this.trackService.findOneTrack(albumId, trackId);
    }

    @Post(':albumId/tracks')
    @HttpCode(200)
    async addTrackVinyl(@Param('albumId') albumId: number, @Body() trackDTO: TrackDTO) {
        return await this.trackService.addTrackAlbum(albumId, trackDTO);
    }

    @Put(':albumId/tracks/:trackId')
    async update(@Param('albumId') albumId: number, @Param('trackId') trackId: number, @Body() trackDTO: TrackDTO) {
        return await this.trackService.update(albumId, trackId, trackDTO);
    }

    @Delete(':albumId/tracks/:trackId')
    @HttpCode(204)
    async delete(@Param('albumId') albumId: number, @Param('trackId') trackId: number) {
        return await this.trackService.delete(albumId, trackId)
    }
}
