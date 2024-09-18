import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; // serve para manipular os produtos no banco de dados
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  findOneByName(name: string): Promise<Product> {
    return this.productRepository.findOneBy({ name });
  }

  async create(product: Product): Promise<Product> {
    const existingProduct = await this.findOneByName(product.name);
    if (existingProduct) {
      throw new BadRequestException('Este produto já está cadastrado.');
    }
    return this.productRepository.save(product);
  }

  async update(id: number, updatedProduct: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, updatedProduct);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}

