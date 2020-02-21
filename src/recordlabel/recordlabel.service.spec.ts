import { Test, TestingModule } from '@nestjs/testing';
import { RecordLabelService } from './recordlabel.service';

describe('RecordLabelService', () => {
  let service: RecordLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordLabelService],
    }).compile();

    service = module.get<RecordLabelService>(RecordLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
