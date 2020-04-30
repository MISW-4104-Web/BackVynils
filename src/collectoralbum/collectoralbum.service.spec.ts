import { Test, TestingModule } from '@nestjs/testing';
import { CollectoralbumService } from './collectoralbum.service';

describe('CollectoralbumService', () => {
  let service: CollectoralbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectoralbumService],
    }).compile();

    service = module.get<CollectoralbumService>(CollectoralbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
