import { Test, TestingModule } from '@nestjs/testing';
import { PoojalistService } from './poojalist.service';

describe('PoojalistService', () => {
  let service: PoojalistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoojalistService],
    }).compile();

    service = module.get<PoojalistService>(PoojalistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
