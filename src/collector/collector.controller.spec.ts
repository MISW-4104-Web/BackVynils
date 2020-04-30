import { Test, TestingModule } from '@nestjs/testing';
import { CollectorController } from './collector.controller';

describe('Collector Controller', () => {
  let controller: CollectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectorController],
    }).compile();

    controller = module.get<CollectorController>(CollectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
