import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Artist } from "./artist/artist.entity"
import { RecordLabel } from "./recordlabel/recordlabel.entity"
import { Vinyl } from "./vinyl/vinyl.entity"
import { Organization } from "./organization/organization.entity"
import { Prize } from "./prize/prize.entity";
import { Review } from "./review/review.entity";


import { ArtistModule } from './artist/artist.module';
import { RecordLabelModule } from './recordlabel/recordlabel.module';
import { VinylModule } from './vinyl/vinyl.module';
import { ArtistVinylModule } from './artistvinyl/artistvinyl.module';
import { VinylArtistModule } from './vinylartist/vinylartist.module';
import { VinylRecordLabelModule } from './vinylrecordlabel/vinylrecordlabel.module';
import { RecordLabelVinylModule } from './recordlabelvinyl/recordlabelvinyl.module';
import { OrganizationModule } from './organization/organization.module';
import { PrizeModule } from './prize/prize.module';
import { ReviewModule } from './review/review.module';
import { PrizeArtistModule } from './prizeartist/prizeartist.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'bookstore',
      entities: [Artist, RecordLabel, Vinyl, Organization, Prize, Review],
      dropSchema: true,
      synchronize: true,
    }),
    ArtistModule,
    RecordLabelModule,
    VinylModule,
    ArtistVinylModule,
    VinylArtistModule,
    VinylRecordLabelModule,
    RecordLabelVinylModule,
    OrganizationModule,
    PrizeModule,
    ReviewModule,
    PrizeArtistModule],
})
export class AppModule { }
