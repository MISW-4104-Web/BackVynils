import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Review } from './review.entity';
import { Vinyl } from '../vinyl/vinyl.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Review, Vinyl])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }
