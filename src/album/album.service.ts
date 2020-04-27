import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
import { AlbumDTO } from './album.dto';
import { AlbumDetailDTO } from './album.detail.dto';
import { BusinnesLogicException, BusinessError } from '../shared/errors/business-errors';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album)
        private readonly albumRepository: Repository<Album>
    ) { }

    async findAll(): Promise<AlbumDetailDTO[]> {
        return await this.albumRepository.find();
    }

    async findOne(id: number): Promise<AlbumDetailDTO> {
        const album = await this.albumRepository.findOne(id);
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)
        return album;
    }

    async create(albumDTO: AlbumDTO): Promise<AlbumDTO> {
        const album = new Album();
        album.name = albumDTO.name;
        album.cover = albumDTO.cover;
        album.releaseDate = albumDTO.releaseDate;
        album.description = albumDTO.description;
        album.genre = albumDTO.genre;
        album.recordLabel = albumDTO.recordLabel;

        return await this.albumRepository.save(album);
    }

    async update(id: number, albumDTO: AlbumDTO) {

        const album = await this.albumRepository.findOne(id);
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)
        else {
            album.name = albumDTO.name;
            album.cover = albumDTO.cover;
            album.releaseDate = albumDTO.releaseDate;
            album.description = albumDTO.description;
            album.genre = albumDTO.genre;
            album.recordLabel = albumDTO.recordLabel;
            await this.albumRepository.save(album);
        }
        return album;
    }

    async delete(id: number) {
        const album = await this.albumRepository.findOne(id);
        if (!album)
            throw new BusinnesLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)
        return await this.albumRepository.remove(album);
    }
}
