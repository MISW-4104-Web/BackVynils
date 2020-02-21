import { Test, TestingModule } from '@nestjs/testing';
import { ArtistVinylController } from './artistvinyl.controller';

describe('ArtistVinyl Controller', () => {
  let controller: ArtistVinylController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistVinylController],
    }).compile();

    controller = module.get<ArtistVinylController>(ArtistVinylController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
