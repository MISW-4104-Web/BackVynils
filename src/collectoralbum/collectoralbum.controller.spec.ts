import { Test, TestingModule } from '@nestjs/testing';
import { CollectorAlbumController } from './collectoralbum.controller';

describe('Collectoralbum Controller', () => {
  let controller: CollectorAlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectorAlbumController],
    }).compile();

    controller = module.get<CollectorAlbumController>(CollectorAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
