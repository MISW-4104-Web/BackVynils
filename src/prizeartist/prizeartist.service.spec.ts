import { Test, TestingModule } from '@nestjs/testing';
import { PrizeArtistService } from './prizeartist.service';

describe('PrizeArtistService', () => {
  let service: PrizeArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrizeArtistService],
    }).compile();

    service = module.get<PrizeArtistService>(PrizeArtistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
