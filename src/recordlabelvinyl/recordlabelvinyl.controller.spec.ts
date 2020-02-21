import { Test, TestingModule } from '@nestjs/testing';
import { RecordLabelVinylController } from './recordlabelvinyl.controller';

describe('RecordLabelVinyl Controller', () => {
  let controller: RecordLabelVinylController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordLabelVinylController],
    }).compile();

    controller = module.get<RecordLabelVinylController>(RecordLabelVinylController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
