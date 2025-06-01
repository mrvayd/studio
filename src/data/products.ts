
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

const laptopScreenServiceTemplate: Omit<Product, 'id' | 'sku' | 'name' | 'shortDescription' | 'description' | 'images' | 'specifications' | 'dataAiHint' > & { category: string; price: number; stock: number } = {
  category: "Repair Services",
  price: 4500.00, // Starting price
  stock: 100, // Represents service availability
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

const motherboardRepairService: Product = {
  id: "service-mb1",
  name: "Laptop Motherboard Repair Service",
  category: "Repair Services",
  price: 8000.00, // Starting price, motherboard repairs are typically more expensive
  shortDescription: "Expert diagnosis and repair for laptop motherboard issues.",
  description: "Facing issues like no power, unexpected shutdowns, or component failures? Your laptop's motherboard might be the culprit. Our skilled technicians offer comprehensive motherboard repair services, including component-level repairs, BGA reballing/reflowing, and trace repairs. Due to the complexity, a diagnostic fee may apply, which will be credited towards the final repair cost. Contact us for an assessment.",
  images: ["https://placehold.co/600x400.png"],
  specifications: [
    { name: "Service Type", value: "Motherboard Repair & Diagnosis" },
    { name: "Common Issues", value: "No Power, Liquid Damage, Component Failure, Overheating" },
    { name: "Turnaround Time", value: "3-7 business days (average, depends on complexity)" },
    { name: "Warranty", value: "90-day warranty on performed repairs" }
  ],
  stock: 50, // Represents service capacity
  sku: "AE-SVC-MBRREP-1",
  dataAiHint: "motherboard repair electronics"
};

export const mockProducts: Product[] = [
  {
    ...laptopScreenServiceTemplate,
    id: "service-scrn1",
    name: "Laptop Screen Replacement Service",
    shortDescription: "Professional screen replacement for cracked or malfunctioning laptop displays.",
    description: "Accidents happen. If you've cracked your laptop screen or it's displaying issues like dead pixels or flickering, our expert technicians can help. We offer professional screen replacement services for a wide range of laptop makes and models. We use high-quality replacement parts to ensure your laptop looks and functions like new. Price may vary depending on the laptop model and screen type. Contact us for a quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Screen Replacement" },
      { name: "Turnaround Time", value: "1-3 business days (average)" },
      { name: "Warranty", value: "90-day warranty on parts and labor" }
    ],
    sku: "AE-SVC-SCRNREP-001",
    dataAiHint: "laptop repair"
  },
  {
    ...laptopScreenServiceTemplate,
    id: "service-scrn2",
    name: "Laptop Screen Replacement Service",
    shortDescription: "Professional screen replacement for cracked or malfunctioning laptop displays.",
    description: "Accidents happen. If you've cracked your laptop screen or it's displaying issues like dead pixels or flickering, our expert technicians can help. We offer professional screen replacement services for a wide range of laptop makes and models. We use high-quality replacement parts to ensure your laptop looks and functions like new. Price may vary depending on the laptop model and screen type. Contact us for a quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Screen Replacement" },
      { name: "Turnaround Time", value: "1-3 business days (average)" },
      { name: "Warranty", value: "90-day warranty on parts and labor" }
    ],
    sku: "AE-SVC-SCRNREP-002",
    dataAiHint: "laptop repair"
  },
  {
    ...laptopScreenServiceTemplate,
    id: "service-scrn3",
    name: "Laptop Screen Replacement Service",
    shortDescription: "Professional screen replacement for cracked or malfunctioning laptop displays.",
    description: "Accidents happen. If you've cracked your laptop screen or it's displaying issues like dead pixels or flickering, our expert technicians can help. We offer professional screen replacement services for a wide range of laptop makes and models. We use high-quality replacement parts to ensure your laptop looks and functions like new. Price may vary depending on the laptop model and screen type. Contact us for a quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Screen Replacement" },
      { name: "Turnaround Time", value: "1-3 business days (average)" },
      { name: "Warranty", value: "90-day warranty on parts and labor" }
    ],
    sku: "AE-SVC-SCRNREP-003",
    dataAiHint: "laptop repair"
  },
  virusRemovalService,
  motherboardRepairService,
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}
