import { Test, TestingModule } from '@nestjs/testing';
import { AlbumMusicianService } from './albummusician.service';

describe('AlbumMusicianService', () => {
  let service: AlbumMusicianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumMusicianService],
    }).compile();

    service = module.get<AlbumMusicianService>(AlbumMusicianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
