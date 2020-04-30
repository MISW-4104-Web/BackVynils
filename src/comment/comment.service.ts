import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinnesLogicException, BusinessError } from '../shared/errors/business-errors';
import { CommentDTO } from './comment.dto';
import { Comment } from './comment.entity';
import { Album } from '../album/album.entity';
import { Collector } from '../collector/collector.entity';
import { AlbumDTO } from '../album/album.dto';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Collector)
        private readonly collectorRepository: Repository<Collector>,
        @InjectRepository(Album)
        private readonly albumRepository: Repository<Album>,
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>
    ) { }

    async findCommentsByAlbumId(albumId: number): Promise<CommentDTO[]> {
        const album = await this.albumRepository.findOne(albumId, { relations: ["comments"] });
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        return album.comments;
    }

    async findCommentsByAlbumIdCommentId(albumId: number, commentId: number): Promise<CommentDTO> {
        const album = await this.albumRepository.findOne(albumId, { relations: ["comments"] });
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const comment = await this.commentRepository.findOne(commentId);
        if (!comment)
            throw new BusinnesLogicException("The comment with the given id was not found", BusinessError.NOT_FOUND)

        const commentalbum = album.comments.find(e => e.id === comment.id);
        if (!commentalbum)
            throw new BusinnesLogicException("The comment is not associated to the album", BusinessError.NOT_FOUND)

        return commentalbum;
    }


    async addCommentAlbum(albumId: number, commentDTO: CommentDTO): Promise<CommentDTO> {

        const album = await this.albumRepository.findOne(albumId);
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const collector = await this.collectorRepository.findOne(commentDTO.collector.id);
        if (!collector)
            throw new BusinnesLogicException("The collector with the given id was not found", BusinessError.NOT_FOUND)

        const comment = new Comment();
        comment.description = commentDTO.description;
        comment.rating = commentDTO.rating;
        comment.collector = collector;
        comment.album = album;

        return await this.commentRepository.save(comment);
    }

    async updateComment(albumId: number, commentId: number, commentDTO: CommentDTO) {

        const album = await this.albumRepository.findOne(albumId, { relations: ["comments"] });
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const collector = await this.collectorRepository.findOne(commentDTO.collector.id);
        if (!collector)
            throw new BusinnesLogicException("The collector with the given id was not found", BusinessError.NOT_FOUND)

        const comment = await this.commentRepository.findOne(commentId);
        if (!comment)
            throw new BusinnesLogicException("The comment with the given id was not found", BusinessError.NOT_FOUND)

        const commentalbum = album.comments.find(e => e.id === comment.id);
        if (!commentalbum)
            throw new BusinnesLogicException("The comment is not associated to the album", BusinessError.NOT_FOUND)

        comment.description = commentDTO.description;
        comment.rating = commentDTO.rating;
        comment.collector = collector;

        return await this.commentRepository.save(comment);

    }

    async deleteComment(albumId: number, commentId: number) {

        const album = await this.albumRepository.findOne(albumId, { relations: ["comments"] });
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)

        const comment = await this.commentRepository.findOne(commentId);
        if (!comment)
            throw new BusinnesLogicException("The comment with the given id was not found", BusinessError.NOT_FOUND)

        album.comments = album.comments.filter(e => e.id !== comment.id);

        await this.commentRepository.remove(comment);

        return await this.albumRepository.save(album);
    }


    /*
    async findAll(): Promise<CommentDTO[]> {
        return await this.collectorRepository.find();
    }

    async findOne(id: number): Promise<Comment> {
        const collector = await this.collectorRepository.findOne(id);
        if (!collector)
            throw new BusinnesLogicException("The collector with the given id was not found", BusinessError.NOT_FOUND)
        return collector;
    }

    async create(collectorDTO: CommentDTO): Promise<CommentDTO> {
        const collector = new Comment();
        collector.name = collectorDTO.name;
        collector.telephone = collectorDTO.telephone;
        collector.email = collectorDTO.email;
        return await this.collectorRepository.save(collector);
    }

    

    async delete(id: number) {
        const collector = await this.collectorRepository.findOne(id);
        if (!collector)
            throw new BusinnesLogicException("The collector with the given id was not found", BusinessError.NOT_FOUND)
        return await this.collectorRepository.remove(collector);
    }*/

}
