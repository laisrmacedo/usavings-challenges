import { Test, TestingModule } from '@nestjs/testing';
import { GoodsOutController } from './goods-out.controller';

describe('GoodsOutController', () => {
  let controller: GoodsOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodsOutController],
    }).compile();

    controller = module.get<GoodsOutController>(GoodsOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
