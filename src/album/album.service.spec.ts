import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumDTO } from './album.dto';
import { Album } from './album.entity';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let repositoryMock: MockType<Repository<Album>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlbumService, {
          provide: getRepositoryToken(Album),
          useFactory: repositoryMockFactory
        },
      ],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repositoryMock = module.get(getRepositoryToken(Album));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  save: jest.fn()
}));

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};