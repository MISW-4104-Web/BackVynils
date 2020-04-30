import { Test, TestingModule } from '@nestjs/testing';
import { BandMusicianController } from './bandmusician.controller';

describe('Bandmusician Controller', () => {
  let controller: BandMusicianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandMusicianController],
    }).compile();

    controller = module.get<BandMusicianController>(BandMusicianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
