import { Test, TestingModule } from '@nestjs/testing';
import { GoodsInController } from './goods-in.controller';

describe('GoodsInController', () => {
  let controller: GoodsInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodsInController],
    }).compile();

    controller = module.get<GoodsInController>(GoodsInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
