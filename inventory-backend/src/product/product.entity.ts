import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GoodsIn } from '../goods-in/goods-in.entity';
import { GoodsOut } from '../goods-out/goods-out.entity';
import { Stock } from '../stock/stock.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('decimal', { precision: 10, scale: 2, unique: true })
  price: number;

  @Column()
  unit: string;

  @Column()
  shelf_life: number;

  // Relacionamento com GoodsIn
  @OneToMany(() => GoodsIn, goodsIn => goodsIn.product)
  goodsIn: GoodsIn[];

  // Relacionamento com GoodsOut
  @OneToMany(() => GoodsOut, goodsOut => goodsOut.product)
  goodsOut: GoodsOut[];

  // Relacionamento com Stock
  @OneToMany(() => Stock, stock => stock.product)
  stock: Stock[];
}
