import { Test, TestingModule } from '@nestjs/testing';
import { PrizeController } from './prize.controller';

describe('Prize Controller', () => {
  let controller: PrizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrizeController],
    }).compile();

    controller = module.get<PrizeController>(PrizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
