import { Test, TestingModule } from '@nestjs/testing';
import { BandalbumService } from './bandalbum.service';

describe('BandalbumService', () => {
  let service: BandalbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandalbumService],
    }).compile();

    service = module.get<BandalbumService>(BandalbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
