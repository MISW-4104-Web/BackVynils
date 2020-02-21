import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Organization } from './organization.entity';
import { OrganizationDto } from './organization.dto';

import { BusinnesLogicException, BusinessError } from "../shared/errors/business-errors";

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>) { }

    async findAll(): Promise<Organization[]> {
        return await this.organizationRepository.find();
    }

    async findOne(id: number): Promise<Organization> {
        const organization = await this.organizationRepository.findOne(id);
        if (!organization)
            throw new BusinnesLogicException("The organization with the given id was not found", BusinessError.NOT_FOUND)

        return organization
    }

    async create(organizationDto: OrganizationDto): Promise<Organization> {

        const organization = await this.organizationRepository.findOne({ where: { name: organizationDto.name } });
        if (organization)
            throw new BusinnesLogicException("There is an organization with the same name", BusinessError.PRECONDITION_FAILED)

        const newOrganization = new Organization();
        newOrganization.name = organizationDto.name;
        newOrganization.type = organizationDto.type

        return await this.organizationRepository.save(newOrganization);
    }

    async update(id: number, organizationDto: OrganizationDto) {
        const organization = await this.organizationRepository.findOne(id);
        if (!organization)
            throw new BusinnesLogicException("The organization with the given id was not found", BusinessError.NOT_FOUND)

        organization.name = organizationDto.name;
        organization.type = organizationDto.type;

        return await this.organizationRepository.save(organization);
    }

    async delete(id: number) {
        const organization = await this.organizationRepository.findOne(id, { relations: ["prize"] });

        if (!organization)
            throw new BusinnesLogicException("The organization with the given id was not found", BusinessError.NOT_FOUND)
        else if (organization.prize)
            throw new BusinnesLogicException("The editorial has prize", BusinessError.PRECONDITION_FAILED)

        return await this.organizationRepository.remove(organization);
    }

}
