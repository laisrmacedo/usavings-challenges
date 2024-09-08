export interface Product {
  id: number,
  name: string,
  price: number,
  unit: string,
  shelf_life: number
}

export interface Stock {
  id: number,
  quantity: number,
  production_date: Date,
  created_at: Date,
  product:{
    id: number,
    name: string,
    price: number,
    unit: string,
    shelf_life: number
  }
  due_date: Date 
}