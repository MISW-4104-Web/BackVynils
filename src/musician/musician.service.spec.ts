import { Test, TestingModule } from '@nestjs/testing';
import { MusicianService } from './musician.service';

describe('MusicianService', () => {
  let service: MusicianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicianService],
    }).compile();

    service = module.get<MusicianService>(MusicianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
