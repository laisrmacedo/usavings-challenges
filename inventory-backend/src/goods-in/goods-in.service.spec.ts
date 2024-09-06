import { Test, TestingModule } from '@nestjs/testing';
import { GoodsInService } from './goods-in.service';

describe('GoodsInService', () => {
  let service: GoodsInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodsInService],
    }).compile();

    service = module.get<GoodsInService>(GoodsInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
