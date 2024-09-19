import { Test, TestingModule } from '@nestjs/testing';
import { PoojabookingsController } from './poojabookings.controller';
import { PoojabookingsService } from './poojabookings.service';

describe('PoojabookingsController', () => {
  let controller: PoojabookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoojabookingsController],
      providers: [PoojabookingsService],
    }).compile();

    controller = module.get<PoojabookingsController>(PoojabookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
