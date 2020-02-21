import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

import { OrganizationDto } from "./organization.dto";
import { OrganizationService } from "./organization.service";

@Controller('organizations')
@UseInterceptors(BusinessErrorsInterceptor)
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) { }

    @Get()
    async findAll() {
        return await this.organizationService.findAll();
    }

    @Get(':organizationId')
    async findOne(@Param('organizationId') organizationId) {
        return await this.organizationService.findOne(organizationId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() organizationDto: OrganizationDto) {
        return await this.organizationService.create(organizationDto);
    }

    @Put(':organizationId')
    async update(@Param('organizationId') organizationId: number, @Body() organizationDto: OrganizationDto) {
        return await this.organizationService.update(organizationId, organizationDto);
    }

    @Delete(':organizationId')
    @HttpCode(204)
    async delete(@Param('organizationId') organizationId: number) {
        return await this.organizationService.delete(organizationId)
    }
}
