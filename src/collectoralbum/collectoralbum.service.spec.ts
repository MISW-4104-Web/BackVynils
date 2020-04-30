import { Test, TestingModule } from '@nestjs/testing';
import { CollectorAlbumService } from './collectoralbum.service';

describe('CollectorAlbumService', () => {
  let service: CollectorAlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectorAlbumService],
    }).compile();

    service = module.get<CollectorAlbumService>(CollectorAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
