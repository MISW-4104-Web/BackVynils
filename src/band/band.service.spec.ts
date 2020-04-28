import { Test, TestingModule } from '@nestjs/testing';
import { BandService } from './band.service';

describe('BandService', () => {
  let service: BandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandService],
    }).compile();

    service = module.get<BandService>(BandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
