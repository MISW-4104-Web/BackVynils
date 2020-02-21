import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { ReviewDto } from "./review.dto";
import { ReviewService } from "./review.service";

@Controller('vinyls')
@UseInterceptors(BusinessErrorsInterceptor)
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Get(':vinylId/reviews')
    async findReviews(@Param('vinylId') vinylId) {
        return await this.reviewService.findReviews(vinylId);
    }

    @Get(':vinylId/reviews/:reviewId')
    async findOneReview(@Param('vinylId') vinylId, @Param('reviewId') reviewId) {
        return await this.reviewService.findOneReview(vinylId, reviewId);
    }


    @Post(':vinylId/reviews')
    @HttpCode(200)
    async addReviewVinyl(@Param('vinylId') vinylId, @Body() reviewDto: ReviewDto) {
        return await this.reviewService.addReviewVinyl(vinylId, reviewDto);
    }

    @Put(':vinylId/reviews/:reviewId')
    async update(@Param('vinylId') vinylId: number, @Param('reviewId') reviewId: number, @Body() reviewDto: ReviewDto) {
        return await this.reviewService.update(vinylId, reviewId, reviewDto);
    }


    @Delete(':vinylId/reviews/:reviewId')
    @HttpCode(204)
    async delete(@Param('vinylId') vinylId: number, @Param('reviewId') reviewId: number) {
        return await this.reviewService.delete(vinylId, reviewId)
    }
}
