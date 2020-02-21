import { Controller, Get, Post, HttpCode, Param, UseInterceptors, Body, Put, Delete } from '@nestjs/common';
import { ArtistVinylService } from './artistvinyl.service';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { VinylDto } from "../vinyl/vinyl.dto";

@Controller('artists')
@UseInterceptors(BusinessErrorsInterceptor)
export class ArtistVinylController {

    constructor(private readonly artistvinylService: ArtistVinylService) { }

    @Get(':artistId/vinyls/')
    async findVinylsByArtistId(@Param('artistId') artistId) {
        return await this.artistvinylService.findVinylsByArtistId(artistId);
    }

    @Get(':artistId/vinyls/:vinylId')
    async findVinylsByArtistIdVinylId(@Param('artistId') artistId, @Param('vinylId') vinylId) {
        return await this.artistvinylService.findVinylsByArtistIdVinylId(artistId, vinylId);
    }

    @Post(':artistId/vinyls/:vinylId')
    @HttpCode(200)
    async addArtistVinyl(@Param('artistId') artistId: number, @Param('vinylId') vinylId: number) {
        return await this.artistvinylService.addArtistVinyl(artistId, vinylId);
    }

    @Put(':artistId/vinyls/')
    async associateArtistVinyl(@Param('artistId') artistId: number,
        @Body() vinylDto: VinylDto[]) {
        return await this.artistvinylService.associateArtistVinyl(artistId, vinylDto);
    }

    @Delete(':artistId/vinyls/:vinylId')
    @HttpCode(204)
    async deleteVinylToArtist(@Param('artistId') artistId: number,
        @Param('vinylId') vinylId: number) {
        return await this.artistvinylService.deleteVinylToArtist(artistId, vinylId);
    }
}
