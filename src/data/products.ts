
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

export const mockProducts: Product[] = [
  {
    id: "4",
    name: "Laptop Screen Replacement Service",
    category: "Repair Services",
    price: 4500.00, // Starting price
    shortDescription: "Professional screen replacement for cracked or malfunctioning laptop displays.",
    description: "Accidents happen. If you've cracked your laptop screen or it's displaying issues like dead pixels or flickering, our expert technicians can help. We offer professional screen replacement services for a wide range of laptop makes and models. We use high-quality replacement parts to ensure your laptop looks and functions like new. Price may vary depending on the laptop model and screen type. Contact us for a quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Screen Replacement" },
      { name: "Turnaround Time", value: "1-3 business days (average)" },
      { name: "Warranty", value: "90-day warranty on parts and labor" }
    ],
    stock: 100, // Represents service availability
    sku: "AE-SVC-SCRNREP",
    dataAiHint: "laptop repair"
  }
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}
