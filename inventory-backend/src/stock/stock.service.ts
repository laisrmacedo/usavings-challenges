import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from '../stock/stock.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  findAll(): Promise<Stock[]> {
    return this.stockRepository.find({ relations: ['product'] });
  }

  findOne(id: number): Promise<Stock> {
    return this.stockRepository.findOne({
      where: { id },
      relations: ['product'],
    });
  }

  addDays(dateStr: Date, daysToAdd: number): Date {
    console.log("aquiaaaaaaaaaa", dateStr, daysToAdd)
    const date = new Date(dateStr);
    date.setDate(date.getDate() + daysToAdd);
    return date
  }

  async createStockWithProduct(name: string, quantity: number, production_date: Date): Promise<Stock> {
    
    
    const product = await this.productRepository.findOneBy({ name });
    if (!product) {
      throw new Error('Product not found');
    }

    const dueDate = this.addDays(new Date(production_date), product.shelf_life);

    if (dueDate < new Date()) {
      throw new Error('Este produto já está vencido.');
    }

    const stock = new Stock();
    stock.product = product;
    stock.quantity = quantity;
    stock.production_date = production_date;
    stock.due_date = dueDate;


    return this.stockRepository.save(stock);
  }

  async update(id: number, updatedStock: Partial<Stock>): Promise<Stock> {
    const savedStock = await this.findOne(id);
    console.log("aagora", updatedStock, savedStock)

    let due_date = savedStock.due_date;
    if(updatedStock.production_date) {
      due_date = this.addDays(new Date(updatedStock.production_date), savedStock.product.shelf_life);
    }

    await this.stockRepository.update(id, {
      ...updatedStock,
      due_date,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.stockRepository.delete(id);
  }

  async findByProductName(productName: string): Promise<Stock[]> {
    const product = await this.productRepository.findOneBy({ name: productName });

    if (!product) {
      return [];
    }

    return this.stockRepository.createQueryBuilder('stock')
      .where('stock.productId = :productId', { productId: product.id })
      .getMany();
  }
}
