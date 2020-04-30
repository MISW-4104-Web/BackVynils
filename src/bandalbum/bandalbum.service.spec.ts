import { Test, TestingModule } from '@nestjs/testing';
import { BandAlbumService } from './bandalbum.service';

describe('BandalbumService', () => {
  let service: BandAlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandAlbumService],
    }).compile();

    service = module.get<BandAlbumService>(BandAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
