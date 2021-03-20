import { Controller, UseInterceptors, Post, HttpCode, Param, Body, Get, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { CommentService } from './comment.service';
import { CommentDTO } from './comment.dto';

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get(':albumId/comments/')
    async findCommentsByAlbumId(@Param('albumId') albumId: number) {
        return await this.commentService.findCommentsByAlbumId(albumId);
    }

    @Get(':albumId/comments/:commentId')
    async findCommentsByAlbumIdCommentId(@Param('albumId') albumId: number, @Param('commentId') commentId: number) {
        return await this.commentService.findCommentsByAlbumIdCommentId(albumId, commentId);
    }

    @Post(':albumId/comments')
    @HttpCode(200)
    async addCommentAlbum(@Param('albumId') albumId: number, @Body() commentDTO: CommentDTO) {
        return await this.commentService.addCommentAlbum(albumId, commentDTO);
    }

    @Put(':albumId/comments/:commentId')
    async updateComment(@Param('albumId') albumId: number, @Param('commentId') commentId: number,
        @Body() commentDTO: CommentDTO) {
        return await this.commentService.updateComment(albumId, commentId, commentDTO);
    }

    @Delete(':albumId/comments/:commentId')
    @HttpCode(204)
    async deleteVinylToArtist(@Param('albumId') albumId: number,
        @Param('commentId') commentId: number) {
        return await this.commentService.deleteComment(albumId, commentId);
    }
}
