import { Module } from '@nestjs/common';
import { GoodsOutService } from './goods-out.service';
import { GoodsOutController } from './goods-out.controller';
import { GoodsOut } from './goods-out.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOut])],
  providers: [GoodsOutService],
  controllers: [GoodsOutController]
})
export class GoodsOutModule {}
