import { Test, TestingModule } from '@nestjs/testing';
import { HallbookingsController } from './hallbookings.controller';
import { HallbookingsService } from './hallbookings.service';

describe('HallbookingsController', () => {
  let controller: HallbookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HallbookingsController],
      providers: [HallbookingsService],
    }).compile();

    controller = module.get<HallbookingsController>(HallbookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
