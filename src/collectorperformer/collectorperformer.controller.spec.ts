import { Test, TestingModule } from '@nestjs/testing';
import { CollectorPerformerController } from './collectorperformer.controller';

describe('Collectorperformer Controller', () => {
  let controller: CollectorPerformerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectorPerformerController],
    }).compile();

    controller = module.get<CollectorPerformerController>(CollectorPerformerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
