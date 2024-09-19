import { Test, TestingModule } from '@nestjs/testing';
import { TemplefunctionsService } from './templefunctions.service';

describe('TemplefunctionsService', () => {
  let service: TemplefunctionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplefunctionsService],
    }).compile();

    service = module.get<TemplefunctionsService>(TemplefunctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
