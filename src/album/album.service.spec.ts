import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { AlbumService } from './album.service';

export class AlbumRepositoryFake {
  public create(): void {}
  public async save(): Promise<void> {}
  public async remove(): Promise<void> {}
  public async findOne(): Promise<void> {}
}

describe('AlbumService', () => {
  let service: AlbumService;
  let repository: Repository<AlbumService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumService, {
        provide: getRepositoryToken(Album),
        useClass: AlbumRepositoryFake,
      },],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repository = module.get(getRepositoryToken(Album));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
