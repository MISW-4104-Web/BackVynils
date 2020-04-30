import { Test, TestingModule } from '@nestjs/testing';
import { BandalbumController } from './bandalbum.controller';

describe('Bandalbum Controller', () => {
  let controller: BandalbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandalbumController],
    }).compile();

    controller = module.get<BandalbumController>(BandalbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
