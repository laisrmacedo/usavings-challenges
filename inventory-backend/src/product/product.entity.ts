import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stock } from '../stock/stock.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  unit: string;

  @Column()
  shelf_life: number;

  @OneToMany(() => Stock, stock => stock.product)
  stock: Stock[];
}
