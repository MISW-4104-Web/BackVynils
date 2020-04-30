import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Body, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { BandAlbumService } from './bandalbum.service';
import { AlbumDTO } from '../album/album.dto';

@Controller('bands')
@UseInterceptors(BusinessErrorsInterceptor)
export class BandAlbumController {

    constructor(private readonly bandAlbumService: BandAlbumService) { }

    @Get(':bandId/albums/:albumId')
    async findAlbumsByBandIdAlbumId(@Param('bandId') bandId: number, @Param('albumId') albumId: number) {
        return await this.bandAlbumService.findAlbumsByBandIdAlbumId(bandId, albumId);
    }

    @Get(':bandId/albums/')
    async findAlbumsByBandId(@Param('bandId') bandId: number) {
        return await this.bandAlbumService.findAlbumsByBandId(bandId);
    }

    @Post(':bandId/albums/:albumId')
    @HttpCode(200)
    async addBandAlbum(@Param('bandId') bandId: number, @Param('albumId') albumId: number) {
        return await this.bandAlbumService.addBandAlbum(bandId, albumId);
    }

    @Put(':bandId/albums/')
    async associateBandAlbum(@Param('bandId') bandId: number, @Body() albumDTO: AlbumDTO[]) {
        return await this.bandAlbumService.associateBandAlbum(bandId, albumDTO);
    }

    @Delete(':bandId/albums/:albumId')
    @HttpCode(204)
    async deleteAlbumToBand(@Param('bandId') bandId: number,
        @Param('albumId') albumId: number) {
        return await this.bandAlbumService.deleteAlbumToBand(bandId, albumId);
    }

}
