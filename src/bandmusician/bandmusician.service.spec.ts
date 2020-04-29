import { Test, TestingModule } from '@nestjs/testing';
import { BandmusicianService } from './bandmusician.service';

describe('BandmusicianService', () => {
  let service: BandmusicianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandmusicianService],
    }).compile();

    service = module.get<BandmusicianService>(BandmusicianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
