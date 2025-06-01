
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

const laptopServiceTemplate: Omit<Product, 'id' | 'sku'> = {
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
  dataAiHint: "laptop repair"
};

const virusRemovalService: Product = {
  id: "service-vr1",
  name: "Virus & Malware Removal Service",
  category: "Repair Services",
  price: 2500.00,
  shortDescription: "Comprehensive virus, spyware, and malware cleanup for your PC or laptop.",
  description: "Is your computer running slow, showing pop-ups, or behaving erratically? It might be infected with viruses or malware. Our expert technicians perform deep scans and thorough removal of all types of malicious software, including viruses, spyware, adware, and rootkits. We'll also provide advice on how to stay protected in the future. Get your system clean and running smoothly again.",
  images: ["https://placehold.co/600x400.png"],
  specifications: [
    { name: "Service Type", value: "Virus & Malware Removal" },
    { name: "Includes", value: "Deep Scan, Threat Removal, System Optimization Tips" },
    { name: "Turnaround Time", value: "Same day to 1 business day (average)" }
  ],
  stock: 100, // Represents service availability
  sku: "AE-SVC-VIRUSREM",
  dataAiHint: "virus removal security"
};

export const mockProducts: Product[] = [
  {
    ...laptopServiceTemplate,
    id: "service-1",
    sku: "AE-SVC-SCRNREP-1",
  },
  {
    ...laptopServiceTemplate,
    id: "service-2",
    sku: "AE-SVC-SCRNREP-2", 
  },
  {
    ...laptopServiceTemplate,
    id: "service-3",
    sku: "AE-SVC-SCRNREP-3",
  },
  virusRemovalService,
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}
