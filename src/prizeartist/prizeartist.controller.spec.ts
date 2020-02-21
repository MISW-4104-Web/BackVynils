import { Test, TestingModule } from '@nestjs/testing';
import { PrizeArtistController } from './prizeartist.controller';

describe('PrizeArtist Controller', () => {
  let controller: PrizeArtistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrizeArtistController],
    }).compile();

    controller = module.get<PrizeArtistController>(PrizeArtistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
