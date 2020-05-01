import { Test, TestingModule } from '@nestjs/testing';
import { AlbumBandController } from './albumband.controller';

describe('Albumband Controller', () => {
  let controller: AlbumBandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumBandController],
    }).compile();

    controller = module.get<AlbumBandController>(AlbumBandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
