import { Test, TestingModule } from '@nestjs/testing';
import { ArtistController } from './artist.controller';
import { ArtistService } from "./artist.service";
import { Artist } from "./artist.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

jest.mock("../artist/artist.service");

describe("-- Artist controller --", () => {
  let service: ArtistService;
  let controller: ArtistController;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ArtistController],
      providers: [
        ArtistService,
      ]
    }).compile();

    service = module.get<ArtistService>(ArtistService);
    controller = module.get(ArtistController);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("* Find One By Id", () => {
    it("should return an entity of artist if successful", async () => {
      const expectedResult = new Artist();
      const mockNumberToSatisfyParameters = "sdfd";
      jest.spyOn(service, "findOne").mockResolvedValue(expectedResult);
      expect(await controller.findOne(mockNumberToSatisfyParameters)).toBe(expectedResult);
    });


  });

});

/*
describe('Artist Controller', () => {
  let controller: ArtistController;
  let service: ArtistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Artist])],
      controllers: [ArtistController],
      providers: [ArtistService]
    }).compile();

    controller = module.get<ArtistController>(ArtistController);
    service = module.get<ArtistService>(ArtistService);
  });

  describe("findAll", () => {
    it("should return an array of artists", async () => {
      const result: Artist[] = new Array();
      jest.spyOn(service, "findAll").mockResolvedValue(result);
    });


  });


});*/