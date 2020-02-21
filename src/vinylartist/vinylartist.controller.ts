import { Controller, Get, Post, HttpCode, Param, UseInterceptors, Body, Put, Delete } from '@nestjs/common';
import { VinylArtistService } from './vinylartist.service';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { ArtistDto } from "../artist/artist.dto";

@Controller('vinyls')
@UseInterceptors(BusinessErrorsInterceptor)
export class VinylArtistController {
    constructor(private readonly vinylartistService: VinylArtistService) { }

    @Get(':vinylId/artists/')
    async findArtistsByVinylId(@Param('vinylId') vinylId) {
        return await this.vinylartistService.findArtistsByVinylId(vinylId);
    }

    @Get(':vinylId/artists/:artistId')
    async findVinylsByArtistIdVinylId(@Param('vinylId') vinylId, @Param('artistId') artistId) {
        return await this.vinylartistService.findArtistsByVinylIdArtistId(vinylId, artistId);
    }

    @Post(':vinylId/artists/:artistId')
    @HttpCode(200)
    async addVinylArtist(@Param('vinylId') vinylId: number, @Param('artistId') artistId: number) {
        return await this.vinylartistService.addVinylArtist(vinylId, artistId);
    }

    @Put(':vinylId/artists/')
    async associateVinylArtist(@Param('vinylId') vinylId: number,
        @Body() artistDto: ArtistDto[]) {
        return await this.vinylartistService.associateVinylArtist(vinylId, artistDto);
    }

    @Delete(':vinylId/artists/:artistId')
    @HttpCode(204)
    async deleteArtistToVinyl(@Param('vinylId') vinylId: number,
        @Param('artistId') artistId: number) {
        return await this.vinylartistService.deleteArtistToVinyl(vinylId, artistId);
    }
}
