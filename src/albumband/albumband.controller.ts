import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Body, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { AlbumBandService } from './albumband.service';
import { BandDTO } from '../band/band.dto';

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumBandController {

    constructor(private readonly bandAlbumService: AlbumBandService) { }

    @Get(':albumId/bands/:bandId')
    async findBandsByAlbumIdBandId(@Param('bandId') bandId: number, @Param('albumId') albumId: number) {
        return await this.bandAlbumService.findBandsByAlbumIdBandId(bandId, albumId);
    }

    @Get(':albumId/bands')
    async findBandsByAlbumId(@Param('albumId') albumId: number) {
        return await this.bandAlbumService.findBandsByAlbumId(albumId);
    }

    @Post(':albumId/bands/:bandId/')
    @HttpCode(200)
    async addAlbumBand(@Param('bandId') bandId: number, @Param('albumId') albumId: number) {
        return await this.bandAlbumService.addAlbumBand(bandId, albumId);
    }

    @Put(':albumId/bands')
    async associateAlbumBand(@Param('albumId') albumId: number, @Body() bandDTO: BandDTO[]) {
        return await this.bandAlbumService.associateAlbumBand(albumId, bandDTO);
    }

    @Delete(':albumId/bands/:bandId')
    @HttpCode(204)
    async deleteBandToAlbum(@Param('bandId') bandId: number,
        @Param('albumId') albumId: number) {
        return await this.bandAlbumService.deleteBandToAlbum(bandId, albumId);
    }

}
