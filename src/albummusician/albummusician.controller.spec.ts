import { Test, TestingModule } from '@nestjs/testing';
import { AlbumMusicianController } from './albummusician.controller';

describe('Albummusician Controller', () => {
  let controller: AlbumMusicianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumMusicianController],
    }).compile();

    controller = module.get<AlbumMusicianController>(AlbumMusicianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
