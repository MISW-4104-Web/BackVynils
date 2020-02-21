import { Test, TestingModule } from '@nestjs/testing';
import { EditorialbookService } from './recordlabelvinyl.service';

describe('EditorialbookService', () => {
  let service: EditorialbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorialbookService],
    }).compile();

    service = module.get<EditorialbookService>(EditorialbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
