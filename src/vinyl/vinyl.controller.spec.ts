import { Test, TestingModule } from '@nestjs/testing';
import { VinylController } from './vinyl.controller';

describe('Vinyl Controller', () => {
  let controller: VinylController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinylController],
    }).compile();

    controller = module.get<VinylController>(VinylController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
