
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
    id: "ultrabook-x1",
    name: "UltraBook X1 - Thin & Light",
    category: "Laptops",
    price: 95000.00,
    shortDescription: "Powerful and sleek ultrabook for professionals on the go.",
    description: "The UltraBook X1 combines cutting-edge performance with an incredibly thin and light design. Featuring the latest Intel Core i7 processor, 16GB of RAM, a 1TB NVMe SSD, and a stunning 14-inch QHD+ display, it's built for productivity and portability. Long battery life and premium build quality make it the perfect companion for any task.",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Processor", value: "Intel Core i7 (13th Gen)" },
      { name: "RAM", value: "16GB LPDDR5" },
      { name: "Storage", value: "1TB NVMe SSD" },
      { name: "Display", value: "14-inch QHD+ (2560x1600)" },
      { name: "Graphics", value: "Intel Iris Xe Graphics" },
      { name: "Operating System", value: "Windows 11 Pro" },
      { name: "Weight", value: "1.2 kg" },
    ],
    stock: 75,
    sku: "SKU-UBX1-I7-16G-1T",
    manufacturer: "FutureTech",
    dataAiHint: "laptop computer"
  },
  {
    id: "gaming-rig-z9000",
    name: "Gaming Rig Z9000 Desktop",
    category: "Desktop PCs",
    price: 190000.00,
    shortDescription: "Ultimate gaming desktop with top-tier components.",
    description: "Experience unparalleled gaming performance with the Gaming Rig Z9000. Equipped with a high-end AMD Ryzen 9 processor, NVIDIA GeForce RTX 4080 graphics card, 32GB of DDR5 RAM, and a 2TB Gen4 NVMe SSD. Custom liquid cooling and a stunning tempered glass case with RGB lighting complete this powerhouse.",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Processor", value: "AMD Ryzen 9 7950X" },
      { name: "RAM", value: "32GB DDR5 6000MHz" },
      { name: "Storage", value: "2TB Gen4 NVMe SSD + 2TB HDD" },
      { name: "Graphics Card", value: "NVIDIA GeForce RTX 4080 16GB" },
      { name: "Motherboard", value: "X670E Chipset" },
      { name: "Cooling", value: "Custom Liquid Cooling Loop" },
      { name: "Case", value: "Mid-Tower ATX, Tempered Glass, RGB" },
    ],
    stock: 30,
    sku: "SKU-GRZ9-R9-32G-2T",
    manufacturer: "Apex Gaming",
    dataAiHint: "gaming desktop"
  },
  {
    id: "ergo-keyboard-mk7",
    name: "ErgoPro Mechanical Keyboard MK7",
    category: "PC Accessories",
    price: 12500.00,
    shortDescription: "Premium ergonomic mechanical keyboard for comfort and speed.",
    description: "The ErgoPro MK7 is designed for ultimate typing comfort and performance. It features a split ergonomic layout, tactile mechanical switches (Cherry MX Brown equivalent), PBT keycaps, customizable RGB backlighting, and programmable macros. Connect via USB-C or Bluetooth.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Type", value: "Mechanical Keyboard" },
      { name: "Layout", value: "Split Ergonomic, 75%" },
      { name: "Switches", value: "Tactile Mechanical (Brown)" },
      { name: "Keycaps", value: "Double-shot PBT" },
      { name: "Connectivity", value: "USB-C, Bluetooth 5.1" },
      { name: "Features", value: "RGB Backlighting, Programmable Macros" },
    ],
    stock: 120,
    sku: "SKU-EKMK7-BRN",
    manufacturer: "ComfortKey",
    dataAiHint: "mechanical keyboard"
  },
  {
    id: "laptop-screen-repair",
    name: "Laptop Screen Replacement Service",
    category: "Repair Services",
    price: 4500.00, // Starting price
    shortDescription: "Professional screen replacement for most laptop models.",
    description: "Cracked or malfunctioning laptop screen? Our expert technicians provide fast and reliable screen replacement services for a wide range of laptop brands and models. Price varies based on screen type and laptop model. Includes a 90-day warranty on parts and labor. Contact us for a quote.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Service Type", value: "Screen Replacement" },
      { name: "Applicable Devices", value: "Most Laptop Models (consult for compatibility)" },
      { name: "Turnaround Time", value: "Typically 1-3 business days" },
      { name: "Warranty", value: "90-day on parts and labor" },
      { name: "Pricing", value: "Starting from ₹4500 (varies by model)" },
    ],
    stock: 999, // Represents service availability
    sku: "SKU-REPAIR-SCRN",
    manufacturer: "Allied Electronics Services",
    dataAiHint: "laptop repair"
  },
  {
    id: "4k-monitor-proart",
    name: "ProArt 27-inch 4K UHD Monitor",
    category: "PC Accessories",
    price: 42000.00,
    shortDescription: "Color-accurate 4K monitor for creative professionals.",
    description: "The ProArt 27-inch monitor delivers stunning 4K UHD resolution with exceptional color accuracy (100% sRGB, 99% Adobe RGB). Factory pre-calibrated for ΔE < 2. Ideal for photo editing, video production, and graphic design. Features USB-C connectivity with power delivery.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Screen Size", value: "27-inch" },
      { name: "Resolution", value: "4K UHD (3840 x 2160)" },
      { name: "Panel Type", value: "IPS" },
      { name: "Color Gamut", value: "100% sRGB, 99% Adobe RGB" },
      { name: "Connectivity", value: "HDMI, DisplayPort, USB-C (PD 90W)" },
      { name: "Features", value: "HDR10, Factory Calibrated" },
    ],
    stock: 60,
    sku: "SKU-MON-PA27-4K",
    manufacturer: "VisionWorks",
    dataAiHint: "computer monitor"
  },
  {
    id: "pc-tuneup-service",
    name: "PC Performance Tune-Up Service",
    category: "Repair Services",
    price: 1500.00,
    shortDescription: "Optimize your PC's speed and stability.",
    description: "Is your PC running slow? Our tune-up service includes system diagnostics, junk file removal, startup optimization, driver updates, and security checks to get your computer running smoothly again. Suitable for both desktops and laptops.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Service Type", value: "PC Optimization & Cleaning" },
      { name: "Includes", value: "Diagnostics, Software Cleaning, Driver Updates, Security Check" },
      { name: "Applicable Devices", value: "Desktops & Laptops" },
      { name: "Delivery", value: "Remote or In-Store" },
    ],
    stock: 999, // Service availability
    sku: "SKU-REPAIR-TUNEUP",
    manufacturer: "Allied Electronics Services",
    dataAiHint: "pc service"
  }
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}

