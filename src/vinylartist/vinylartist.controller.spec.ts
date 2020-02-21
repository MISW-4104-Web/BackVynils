import { Test, TestingModule } from '@nestjs/testing';
import { VinylArtistController } from './vinylartist.controller';

describe('VinylArtist Controller', () => {
  let controller: VinylArtistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinylArtistController],
    }).compile();

    controller = module.get<VinylArtistController>(VinylArtistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
