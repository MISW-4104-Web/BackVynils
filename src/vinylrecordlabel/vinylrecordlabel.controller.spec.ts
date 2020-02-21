import { Test, TestingModule } from '@nestjs/testing';
import { VinylRecordLabelController } from './vinylrecordlabel.controller';

describe('VinylRecordLabel Controller', () => {
  let controller: VinylRecordLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinylRecordLabelController],
    }).compile();

    controller = module.get<VinylRecordLabelController>(VinylRecordLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
