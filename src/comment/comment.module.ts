import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collector } from '../collector/collector.entity';
import { Album } from '../album/album.entity';
import { Comment } from '../comment/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collector, Comment, Album])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule { }
