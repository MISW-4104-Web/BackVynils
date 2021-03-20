import { Controller, Post, HttpCode, Param, UseInterceptors, Get, Delete } from '@nestjs/common';
import { BandMusicianService } from './bandmusician.service';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';

@Controller('bands')
@UseInterceptors(BusinessErrorsInterceptor)
export class BandMusicianController {

    constructor(private readonly bandMusicianService: BandMusicianService) { }

    @Post(':bandId/musicians/:musicianId')
    @HttpCode(200)
    async addMusicianToBand(@Param('bandId') bandId: number, @Param('musicianId') musicianId: number) {
        return await this.bandMusicianService.addMusicianToBand(bandId, musicianId);
    }

    @Get(':bandId/musicians/:musicianId')
    async findBandByBandIdMusicianId(@Param('bandId') bandId: number, @Param('musicianId') musicianId: number) {
        return await this.bandMusicianService.findBandByBandIdMusicianId(bandId, musicianId);
    }

    @Get(':bandId/musicians/')
    async findMusiciansByBandId(@Param('bandId') bandId: number) {
        return await this.bandMusicianService.findMusiciansByBandId(bandId);
    }

    @Delete(':bandId/musicians/:musicianId')
    @HttpCode(204)
    async deleteMusicianToBand(@Param('bandId') bandId: number,
        @Param('musicianId') musicianId: number) {
        return await this.bandMusicianService.deleteMusicianToBand(bandId, musicianId);
    }
}
