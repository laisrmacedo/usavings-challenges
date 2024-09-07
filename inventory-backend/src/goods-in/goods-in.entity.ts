import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class GoodsIn {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, product => product.goodsIn)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  production_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
