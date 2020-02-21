import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

import { Organization } from './organization.entity';
import { Prize } from '../prize/prize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization, Prize])],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})

export class OrganizationModule { }
