import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Body, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { AlbumMusicianService } from './albummusician.service';
import { MusicianDTO } from '../musician/musician.dto';

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumMusicianController {

    constructor(private readonly musicianAlbumService: AlbumMusicianService) { }

    @Get(':albumId/musicians/:musicianId')
    async findMusiciansByAlbumIdMusicianId(@Param('musicianId') musicianId: number, @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.findMusiciansByAlbumIdMusicianId(musicianId, albumId);
    }

    @Get(':albumId/musicians')
    async findMusiciansByAlbumId(@Param('albumId') albumId: number) {
        return await this.musicianAlbumService.findMusiciansByAlbumId(albumId);
    }

    @Post(':albumId/musicians/:musicianId/')
    @HttpCode(200)
    async addAlbumMusician(@Param('musicianId') musicianId: number, @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.addAlbumMusician(musicianId, albumId);
    }

    @Put(':albumId/musicians')
    async associateAlbumMusician(@Param('albumId') albumId: number, @Body() musicianDTO: MusicianDTO[]) {
        return await this.musicianAlbumService.associateAlbumMusician(albumId, musicianDTO);
    }

    @Delete(':albumId/musicians/:musicianId')
    @HttpCode(204)
    async deleteMusicianToAlbum(@Param('musicianId') musicianId: number,
        @Param('albumId') albumId: number) {
        return await this.musicianAlbumService.deleteMusicianToAlbum(musicianId, albumId);
    }

}
