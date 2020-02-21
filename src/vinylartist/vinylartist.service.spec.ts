import { Test, TestingModule } from '@nestjs/testing';
import { VinylArtistService } from './vinylartist.service';

describe('VinylArtistService', () => {
  let service: VinylArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VinylArtistService],
    }).compile();

    service = module.get<VinylArtistService>(VinylArtistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
