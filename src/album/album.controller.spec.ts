import { Test, TestingModule } from '@nestjs/testing';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

describe('Album Controller', () => {
  let controller: AlbumController
  let service: AlbumService

  const mockAlbumService = {
    findAll: () => [{
      id: 1,
      name: "x" ,
      cover: "x",
      releaseDate: new Date(), 
      description: "x",
      genre: "x",
      recordLabel: "x" 
    }],
  };

  const albumServiceProvider = {
    provide: AlbumService,
    useValue: mockAlbumService,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumController],
      providers: [albumServiceProvider]
    }).compile();

    controller = module.get<AlbumController>(AlbumController);
    service = module.get<AlbumService>(AlbumService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll', async () => {
    expect(await controller.findAll()).toEqual(mockAlbumService.findAll());
  });
});