import { Test, TestingModule } from '@nestjs/testing';
import { VinylRecordLabelService } from './vinylrecordlabel.service';

describe('VinylRecordLabelService', () => {
  let service: VinylRecordLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VinylRecordLabelService],
    }).compile();

    service = module.get<VinylRecordLabelService>(VinylRecordLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
