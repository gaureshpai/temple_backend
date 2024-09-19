import { Test, TestingModule } from '@nestjs/testing';
import { RoombookingsController } from './roombookings.controller';
import { RoombookingsService } from './roombookings.service';

describe('RoombookingsController', () => {
  let controller: RoombookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoombookingsController],
      providers: [RoombookingsService],
    }).compile();

    controller = module.get<RoombookingsController>(RoombookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
