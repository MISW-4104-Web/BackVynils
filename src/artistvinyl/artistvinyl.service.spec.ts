import { Test, TestingModule } from '@nestjs/testing';
import { ArtistVinylService } from './artistvinyl.service';

describe('ArtistVinylService', () => {
  let service: ArtistVinylService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistVinylService],
    }).compile();

    service = module.get<ArtistVinylService>(ArtistVinylService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
