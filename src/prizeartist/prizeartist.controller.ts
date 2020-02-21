import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";
import { PrizeArtistService } from './prizeartist.service';

@Controller('prizes')
@UseInterceptors(BusinessErrorsInterceptor)
export class PrizeArtistController {
    constructor(private readonly prizeArtistService: PrizeArtistService) { }

    @Get(':prizeId/artists')
    async findArtistPrize(@Param('prizeId') prizeId) {
        return await this.prizeArtistService.findArtistPrize(prizeId);
    }


    @Post(':prizeId/artists/:artistId')
    @HttpCode(200)
    async create(@Param('prizeId') prizeId: number, @Param('artistId') artistId: number) {
        return await this.prizeArtistService.create(prizeId, artistId);
    }

    @Put(':prizeId/artists/:artistId')
    @HttpCode(200)
    async associateArtistPrize(@Param('prizeId') prizeId: number, @Param('artistId') artistId: number) {
        return await this.prizeArtistService.associateArtistPrize(prizeId, artistId);
    }

    @Delete(':prizeId/artists')
    @HttpCode(204)
    async deletePrizeArtist(@Param('prizeId') prizeId: number) {
        return await this.prizeArtistService.deletePrizeArtist(prizeId)
    }
}
