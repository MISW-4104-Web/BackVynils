import { Test, TestingModule } from '@nestjs/testing';
import { PerformerprizeController } from './performerprize.controller';

describe('Performerprize Controller', () => {
  let controller: PerformerprizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformerprizeController],
    }).compile();

    controller = module.get<PerformerprizeController>(PerformerprizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
