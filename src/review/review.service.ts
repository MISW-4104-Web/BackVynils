import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';

import { Vinyl } from "../vinyl/vinyl.entity";
import { Review } from "./review.entity";
import { ReviewDto } from "./review.dto";

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Vinyl)
        private readonly vinylRepository: Repository<Vinyl>,
        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>) { }

    async findReviews(id): Promise<Review[]> {
        const vinyl = await this.vinylRepository.findOne(id, { relations: ["reviews"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND);

        return vinyl.reviews;
    }

    async findOneReview(vinylId, reviewId): Promise<Review> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["reviews"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND);

        const review = await this.reviewRepository.findOne(reviewId);
        if (!review)
            throw new BusinnesLogicException("The review with the given id was not found", BusinessError.NOT_FOUND);

        return review;
    }

    async addReviewVinyl(vinylId: number, reviewDto: ReviewDto): Promise<Review> {
        const vinyl = await this.vinylRepository.findOne(vinylId);
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const review = new Review();
        review.name = reviewDto.name;
        review.description = reviewDto.description;
        review.source = reviewDto.source;
        review.vinyl = vinyl;

        return await this.reviewRepository.save(review);
    }

    async update(vinylId: number, reviewId: number, reviewDto: ReviewDto): Promise<Review> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["reviews"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const review = await this.reviewRepository.findOne(reviewId);
        if (!review)
            throw new BusinnesLogicException("The review with the given id was not found", BusinessError.NOT_FOUND);

        review.name = reviewDto.name;
        review.source = reviewDto.source;

        return await this.reviewRepository.save(review);
    }

    async delete(vinylId: number, reviewId: number): Promise<Vinyl> {
        const vinyl = await this.vinylRepository.findOne(vinylId, { relations: ["reviews"] });
        if (!vinyl)
            throw new BusinnesLogicException("The vinyl with the given id was not found", BusinessError.NOT_FOUND)

        const review = await this.reviewRepository.findOne(reviewId);
        if (!review)
            throw new BusinnesLogicException("The review with the given id was not found", BusinessError.NOT_FOUND);

        vinyl.reviews = vinyl.reviews.filter(e => e.id !== review.id);

        return await this.vinylRepository.save(vinyl);
    }
}
