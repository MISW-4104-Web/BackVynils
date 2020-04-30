import { Test, TestingModule } from '@nestjs/testing';
import { MusicianAlbumService } from './musicianalbum.service';

describe('MusicianAlbumService', () => {
  let service: MusicianAlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicianAlbumService],
    }).compile();

    service = module.get<MusicianAlbumService>(MusicianAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
