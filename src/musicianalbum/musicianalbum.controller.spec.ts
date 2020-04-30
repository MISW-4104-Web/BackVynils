import { Test, TestingModule } from '@nestjs/testing';
import { MusicianAlbumController } from './musicianalbum.controller';

describe('MusicianAlbumController', () => {
  let controller: MusicianAlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicianAlbumController],
    }).compile();

    controller = module.get<MusicianAlbumController>(MusicianAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
