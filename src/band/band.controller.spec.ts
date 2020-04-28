import { Test, TestingModule } from '@nestjs/testing';
import { BandController } from './band.controller';

describe('Band Controller', () => {
  let controller: BandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandController],
    }).compile();

    controller = module.get<BandController>(BandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
