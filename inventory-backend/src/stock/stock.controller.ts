import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from '../stock/stock.entity';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async findAll(): Promise<Stock[]> {
    const stocks = await this.stockService.findAll();
    return stocks;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Stock> {
    return this.stockService.findOne(Number(id));
  }

  @Get('product')
  async findByProductName(@Query('name') productName: string): Promise<Stock[]> {
    return this.stockService.findByProductName(productName);
  }

  @Post()
  async createStock(
    @Body('name') name: string,
    @Body('quantity') quantity: number,
    @Body('production_date') production_date: Date = new Date()
  ): Promise<Stock> {
    console.log('testeeeeeeeee', production_date, '<<<<<')
    return this.stockService.createStockWithProduct(name, quantity, production_date);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Partial<Stock>): Promise<Stock> {
    return this.stockService.update(Number(id), product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stockService.remove(Number(id));
  }
}
