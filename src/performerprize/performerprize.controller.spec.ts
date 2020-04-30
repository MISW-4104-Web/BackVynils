import { Test, TestingModule } from '@nestjs/testing';
import { PerformerPrizeController } from './performerprize.controller';

describe('PerformerPrizeController', () => {
  let controller: PerformerPrizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformerPrizeController],
    }).compile();

    controller = module.get<PerformerPrizeController>(PerformerPrizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
