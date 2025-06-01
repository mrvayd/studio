
export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[]; // URLs
  specifications: ProductSpecification[];
  stock: number;
  sku: string;
  manufacturer?: string;
  dataAiHint?: string;
}

export const mockProducts: Product[] = [];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}
