import { Injectable } from '@nestjs/common';
import { Musician } from './musician.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MusicianDTO } from './musician.dto';
import { BusinnesLogicException, BusinessError } from '../shared/errors/business-errors';

@Injectable()
export class MusicianService {
    constructor(
        @InjectRepository(Musician)
        private readonly musicianRepository: Repository<Musician>) { }

    async findAll(): Promise<MusicianDTO[]> {
        return await this.musicianRepository.find();
    }

    async findOne(id: number): Promise<Musician> {
        const musician = await this.musicianRepository.findOne(id);
        if (!musician)
            throw new BusinnesLogicException("The musician with the given id was not found", BusinessError.NOT_FOUND)
        return musician;
    }

    async create(musicianDTO: MusicianDTO): Promise<MusicianDTO> {
        const musician = new Musician();
        musician.name = musicianDTO.name;
        musician.image = musicianDTO.image;
        musician.description = musicianDTO.description;
        musician.birthDate = musicianDTO.birthDate;
        return await this.musicianRepository.save(musician);
    }

    async update(id: number, musicianDTO: MusicianDTO) {

        const musician = await this.musicianRepository.findOne(id);
        if (!musician)
            throw new BusinnesLogicException("The musician with the given id was not found", BusinessError.NOT_FOUND)
        else {
            musician.name = musicianDTO.name;
            musician.image = musicianDTO.image;
            musician.description = musicianDTO.description;
            musician.birthDate = musicianDTO.birthDate;
            await this.musicianRepository.save(musician);
        }
        return musician;
    }

    async delete(id: number) {
        const musician = await this.musicianRepository.findOne(id);
        if (!musician)
            throw new BusinnesLogicException("The musician with the given id was not found", BusinessError.NOT_FOUND)
        return await this.musicianRepository.remove(musician);
    }

}
