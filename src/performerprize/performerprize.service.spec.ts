import { Test, TestingModule } from '@nestjs/testing';
import { PerformerPrizeService } from './performerprize.service';

describe('PerformerPrizeService', () => {
  let service: PerformerPrizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformerPrizeService],
    }).compile();

    service = module.get<PerformerPrizeService>(PerformerPrizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
