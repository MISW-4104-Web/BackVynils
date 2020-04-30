import { Test, TestingModule } from '@nestjs/testing';
import { PerformerprizeService } from './performerprize.service';

describe('PerformerprizeService', () => {
  let service: PerformerprizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformerprizeService],
    }).compile();

    service = module.get<PerformerprizeService>(PerformerprizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
