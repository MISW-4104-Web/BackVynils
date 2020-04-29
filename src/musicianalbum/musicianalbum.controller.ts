import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Body, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { MusicianAlbumService } from './musicianalbum.service';
import { AlbumDTO } from '../album/album.dto';

@Controller('musicians')
@UseInterceptors(BusinessErrorsInterceptor)
export class MusicianAlbumController {

    constructor(private readonly musicianAlbumService: MusicianAlbumService) { }

    @Get(':musicianId/albums/:albumId')
    async findAlbumsByMusicianIdAlbumId(@Param('musicianId') musicianId: number, @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.findAlbumsByMusicianIdAlbumId(musicianId, albumId);
    }

    @Get(':musicianId/albums/')
    async findAlbumsByMusicianId(@Param('musicianId') musicianId: number) {
        return await this.musicianAlbumService.findAlbumsByMusicianId(musicianId);
    }

    @Post(':musicianId/albums/:albumId')
    @HttpCode(200)
    async addMusicianAlbum(@Param('musicianId') musicianId: number, @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.addMusicianAlbum(musicianId, albumId);
    }

    @Put(':musicianId/albums/')
    async associateMusicianAlbum(@Param('musicianId') musicianId: number, @Body() albumDTO: AlbumDTO[]) {
        return await this.musicianAlbumService.associateMusicianAlbum(musicianId, albumDTO);
    }

    @Delete(':musicianId/albums/:albumId')
    @HttpCode(204)
    async deleteAlbumToMusician(@Param('musicianId') musicianId: number,
        @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.deleteAlbumToMusician(musicianId, albumId);
    }

}
