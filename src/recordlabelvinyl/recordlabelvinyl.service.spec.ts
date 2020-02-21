import { Test, TestingModule } from '@nestjs/testing';
import { RecordLabelVinylService } from './recordlabelvinyl.service';

describe('RecordLabelVinylService', () => {
  let service: RecordLabelVinylService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordLabelVinylService],
    }).compile();

    service = module.get<RecordLabelVinylService>(RecordLabelVinylService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
