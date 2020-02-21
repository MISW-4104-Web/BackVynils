import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistVinylController } from './artistvinyl.controller';
import { ArtistVinylService } from './artistvinyl.service';
import { Artist } from '../artist/artist.entity';
import { Vinyl } from '../vinyl/vinyl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist, Vinyl])],
  controllers: [ArtistVinylController],
  providers: [ArtistVinylService]
})
export class ArtistVinylModule { }
