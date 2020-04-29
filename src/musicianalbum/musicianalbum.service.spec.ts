import { Test, TestingModule } from '@nestjs/testing';
import { PerformeralbumService } from './performeralbum.service';

describe('PerformeralbumService', () => {
  let service: PerformeralbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformeralbumService],
    }).compile();

    service = module.get<PerformeralbumService>(PerformeralbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
