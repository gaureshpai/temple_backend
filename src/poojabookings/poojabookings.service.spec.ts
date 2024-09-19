import { Test, TestingModule } from '@nestjs/testing';
import { PoojabookingsService } from './poojabookings.service';

describe('PoojabookingsService', () => {
  let service: PoojabookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoojabookingsService],
    }).compile();

    service = module.get<PoojabookingsService>(PoojabookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
