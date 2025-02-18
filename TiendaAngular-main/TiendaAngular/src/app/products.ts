export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  caracteristicas: string[]; 
  garantia: {
    periodo: string;
    tipo: string;
  }; 
}

  
export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 10,
    caracteristicas: ['5G', 'Pantalla OLED', 'Almacenamiento de 126GB'],
    garantia: {
      periodo: '2 años',
      tipo: 'fabricante'
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 0,
    caracteristicas: ['4G', 'Pantalla LCD', 'Almacenamiento de 64GB'],
    garantia: {
      periodo: '1 año',
      tipo: 'fabricante'
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    stock: 3,
    caracteristicas: ['3G', 'Pantalla LCD', 'Almacenamiento de 32GB'],
    garantia: {
      periodo: '6 meses',
      tipo: 'tienda'
    }
  }
];
