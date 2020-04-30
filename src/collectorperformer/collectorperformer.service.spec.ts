import { Test, TestingModule } from '@nestjs/testing';
import { CollectorPerformerService } from './collectorperformer.service';

describe('CollectorPerformerService', () => {
  let service: CollectorPerformerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectorPerformerService],
    }).compile();

    service = module.get<CollectorPerformerService>(CollectorPerformerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
