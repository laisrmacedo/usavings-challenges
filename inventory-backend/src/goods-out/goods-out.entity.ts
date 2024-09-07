import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class GoodsOut {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, product => product.goodsOut)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
