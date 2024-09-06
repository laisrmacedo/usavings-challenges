import { Test, TestingModule } from '@nestjs/testing';
import { GoodsOutService } from './goods-out.service';

describe('GoodsOutService', () => {
  let service: GoodsOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodsOutService],
    }).compile();

    service = module.get<GoodsOutService>(GoodsOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
