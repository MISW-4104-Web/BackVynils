import { Test, TestingModule } from '@nestjs/testing';
import { PerformeralbumController } from './performeralbum.controller';

describe('Performeralbum Controller', () => {
  let controller: PerformeralbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformeralbumController],
    }).compile();

    controller = module.get<PerformeralbumController>(PerformeralbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
