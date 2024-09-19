import { Test, TestingModule } from '@nestjs/testing';
import { PoojalistController } from './poojalist.controller';
import { PoojalistService } from './poojalist.service';

describe('PoojalistController', () => {
  let controller: PoojalistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoojalistController],
      providers: [PoojalistService],
    }).compile();

    controller = module.get<PoojalistController>(PoojalistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
