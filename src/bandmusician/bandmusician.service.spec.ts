import { Test, TestingModule } from '@nestjs/testing';
import { BandMusicianService } from './bandmusician.service';

describe('BandmusicianService', () => {
  let service: BandMusicianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandMusicianService],
    }).compile();

    service = module.get<BandMusicianService>(BandMusicianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
