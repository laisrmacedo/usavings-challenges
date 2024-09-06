import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsInService } from './goods-in.service';
import { GoodsInController } from './goods-in.controller';
import { GoodsIn } from './goods-in.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsIn])],
  providers: [GoodsInService],
  controllers: [GoodsInController]
})
export class GoodsInModule {}
