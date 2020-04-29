import { Test, TestingModule } from '@nestjs/testing';
import { BandmusicianController } from './bandmusician.controller';

describe('Bandmusician Controller', () => {
  let controller: BandmusicianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandmusicianController],
    }).compile();

    controller = module.get<BandmusicianController>(BandmusicianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
