import { Test, TestingModule } from '@nestjs/testing';
import { BandAlbumController } from './bandalbum.controller';

describe('Bandalbum Controller', () => {
  let controller: BandAlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandAlbumController],
    }).compile();

    controller = module.get<BandAlbumController>(BandAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
