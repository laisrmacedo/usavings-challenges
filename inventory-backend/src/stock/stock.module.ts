import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from './stock.entity';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Stock]), ProductModule],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule {}
