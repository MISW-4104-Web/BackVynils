import { Test, TestingModule } from '@nestjs/testing';
import { ArtistController } from './artist.controller';

describe('Artist Controller', () => {
  let controller: ArtistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistController],
    }).compile();

    controller = module.get<ArtistController>(ArtistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
