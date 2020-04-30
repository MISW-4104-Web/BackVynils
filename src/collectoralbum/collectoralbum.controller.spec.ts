import { Test, TestingModule } from '@nestjs/testing';
import { CollectoralbumController } from './collectoralbum.controller';

describe('Collectoralbum Controller', () => {
  let controller: CollectoralbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectoralbumController],
    }).compile();

    controller = module.get<CollectoralbumController>(CollectoralbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
