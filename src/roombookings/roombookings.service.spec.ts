import { Test, TestingModule } from '@nestjs/testing';
import { RoombookingsService } from './roombookings.service';

describe('RoombookingsService', () => {
  let service: RoombookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoombookingsService],
    }).compile();

    service = module.get<RoombookingsService>(RoombookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
