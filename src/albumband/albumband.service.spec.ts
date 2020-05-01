import { Test, TestingModule } from '@nestjs/testing';
import { AlbumBandService } from './albumband.service';

describe('AlbumbandService', () => {
  let service: AlbumBandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumBandService],
    }).compile();

    service = module.get<AlbumBandService>(AlbumBandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
