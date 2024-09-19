import { Test, TestingModule } from '@nestjs/testing';
import { TemplefunctionsController } from './templefunctions.controller';
import { TemplefunctionsService } from './templefunctions.service';

describe('TemplefunctionsController', () => {
  let controller: TemplefunctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplefunctionsController],
      providers: [TemplefunctionsService],
    }).compile();

    controller = module.get<TemplefunctionsController>(TemplefunctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
