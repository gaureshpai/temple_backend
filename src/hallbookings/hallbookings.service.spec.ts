import { Test, TestingModule } from '@nestjs/testing';
import { HallbookingsService } from './hallbookings.service';

describe('HallbookingsService', () => {
  let service: HallbookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallbookingsService],
    }).compile();

    service = module.get<HallbookingsService>(HallbookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
