import { Test, TestingModule } from '@nestjs/testing';
import { MusicianController } from './musician.controller';

describe('Musician Controller', () => {
  let controller: MusicianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicianController],
    }).compile();

    controller = module.get<MusicianController>(MusicianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
