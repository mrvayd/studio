
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
    id: "1",
    name: "UltraBook X1",
    category: "Laptops",
    price: 95000.00,
    shortDescription: "Sleek, powerful, and ultra-portable laptop for professionals on the go.",
    description: "The UltraBook X1 is the epitome of performance and portability. Featuring the latest Intel Core i7 processor, 16GB of RAM, and a 512GB NVMe SSD, it handles demanding tasks with ease. Its stunning 14-inch QHD+ display offers vibrant colors and sharp details, perfect for creative work or entertainment. Crafted from premium aluminum, it's both durable and lightweight, weighing just 1.2kg. With a battery life of up to 15 hours, you can stay productive all day long. Includes Thunderbolt 4, USB-C, and Wi-Fi 6E for seamless connectivity.",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png"
    ],
    specifications: [
      { name: "Processor", value: "Intel Core i7 (13th Gen)" },
      { name: "RAM", value: "16GB LPDDR5" },
      { name: "Storage", value: "512GB NVMe SSD" },
      { name: "Display", value: "14-inch QHD+ (2560x1600)" },
      { name: "Graphics", value: "Intel Iris Xe Graphics" },
      { name: "Weight", value: "1.2kg" },
      { name: "OS", value: "Windows 11 Pro" }
    ],
    stock: 25,
    sku: "AE-LT-UBX1-I716512",
    manufacturer: "SynthTech",
    dataAiHint: "laptop side"
  },
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
