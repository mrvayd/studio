
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

const serviceTemplate: Omit<Product, 'id' | 'sku' | 'name' | 'shortDescription' | 'description' | 'images' | 'specifications' | 'dataAiHint' > & { category: string; price: number; stock: number } = {
  category: "Repair Services",
  price: 0, // Base price, specific services will override
  stock: 100, // Represents service availability
};

const softwareTemplate: Omit<Product, 'id' | 'sku' | 'name' | 'shortDescription' | 'description' | 'images' | 'specifications' | 'dataAiHint' | 'manufacturer'> & { category: string; price: number; stock: number } = {
  category: "Security Software",
  price: 0, // Base price, specific software will override
  stock: 500, // Represents licenses available
};


export const mockProducts: Product[] = [
  {
    ...serviceTemplate,
    id: "service-scrn-complete",
    name: "Complete Screen Service",
    price: 4500.00,
    shortDescription: "Comprehensive screen service for cracked or malfunctioning laptop displays.",
    description: "Accidents happen. If you've cracked your laptop screen or it's displaying issues like dead pixels or flickering, our expert technicians can help. Our Complete Screen Service covers professional replacement for a wide range of laptop makes and models. We use high-quality replacement parts to ensure your laptop looks and functions like new. Price may vary depending on the laptop model and screen type. Contact us for a quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Complete Screen Replacement" },
      { name: "Common Issues", value: "Cracked screen, Dead pixels, Flickering, Backlight issues" },
      { name: "Turnaround Time", value: "1-3 business days (average)" },
      { name: "Warranty", value: "90-day warranty on parts and labor" }
    ],
    sku: "AE-SVC-SCRNCMPLT-001",
    dataAiHint: "laptop repair screen"
  },
  {
    ...serviceTemplate,
    id: "service-vr1",
    name: "Virus & Malware Removal Service",
    price: 2500.00,
    shortDescription: "Comprehensive virus, spyware, and malware cleanup for your PC or laptop.",
    description: "Is your computer running slow, showing pop-ups, or behaving erratically? It might be infected with viruses or malware. Our expert technicians perform deep scans and thorough removal of all types of malicious software, including viruses, spyware, adware, and rootkits. We'll also provide advice on how to stay protected in the future. Get your system clean and running smoothly again.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Virus & Malware Removal" },
      { name: "Includes", value: "Deep Scan, Threat Removal, System Optimization Tips, Security Advice" },
      { name: "Turnaround Time", value: "Same day to 1 business day (average)" }
    ],
    sku: "AE-SVC-VIRUSREM",
    dataAiHint: "virus removal security"
  },
  {
    ...serviceTemplate,
    id: "service-mb1",
    name: "Laptop Motherboard Repair Service",
    price: 8000.00,
    shortDescription: "Expert diagnosis and repair for laptop motherboard issues.",
    description: "Facing issues like no power, unexpected shutdowns, or component failures? Your laptop's motherboard might be the culprit. Our skilled technicians offer comprehensive motherboard repair services, including component-level repairs, BGA reballing/reflowing, and trace repairs. Due to the complexity, a diagnostic fee may apply, which will be credited towards the final repair cost. Contact us for an assessment.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Motherboard Repair & Diagnosis" },
      { name: "Common Issues", value: "No Power, Liquid Damage, Component Failure, Overheating, No Display" },
      { name: "Turnaround Time", value: "3-7 business days (average, depends on complexity)" },
      { name: "Warranty", value: "90-day warranty on performed repairs" }
    ],
    sku: "AE-SVC-MBRREP-1",
    dataAiHint: "motherboard repair electronics"
  },
  {
    ...serviceTemplate,
    id: "service-dr1",
    name: "Data Recovery Service",
    price: 6000.00,
    shortDescription: "Retrieve lost files from hard drives, SSDs, and other storage media.",
    description: "Accidentally deleted important files or experiencing a drive failure? Our data recovery specialists can help retrieve your valuable data from a variety of storage devices, including hard disk drives (HDDs), solid-state drives (SSDs), USB drives, and memory cards. We handle logical and physical data recovery cases. Contact us for a free evaluation and quote.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "Data Recovery" },
      { name: "Media Types", value: "HDD, SSD, USB Flash Drives, SD Cards" },
      { name: "Recovery For", value: "Deleted files, Formatted drives, Corrupted partitions, Minor physical damage" },
      { name: "Success Rate", value: "Varies by case, No data no fee policy often applies" },
      { name: "Turnaround Time", value: "2-5 business days (evaluation), 5-10 business days (recovery)" }
    ],
    sku: "AE-SVC-DATAREC-001",
    dataAiHint: "data recovery hard drive"
  },
  {
    ...serviceTemplate,
    id: "service-tuneup1",
    name: "PC Performance Tune-Up Service",
    price: 3000.00,
    shortDescription: "Optimize your computer's speed and responsiveness.",
    description: "Is your PC or laptop feeling sluggish? Our performance tune-up service can breathe new life into your machine. We'll clean up unnecessary files, optimize startup programs, update drivers, check for system errors, and provide recommendations to enhance your computer's speed and overall performance. Ideal for older systems or any computer that's not running as smoothly as it used to.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Service Type", value: "System Optimization & Tune-Up" },
      { name: "Includes", value: "Junk File Removal, Startup Optimization, Driver Updates, Registry Cleaning (if applicable), System Health Check" },
      { name: "Benefits", value: "Faster Boot Times, Improved Responsiveness, Smoother Operation" },
      { name: "Turnaround Time", value: "1-2 business days" }
    ],
    sku: "AE-SVC-TUNEUP-001",
    dataAiHint: "computer speed optimization"
  },
  {
    id: "monitor-av-274k",
    name: "AuraVision 27-inch 4K UHD Monitor",
    category: "Monitors",
    price: 28000.00,
    shortDescription: "Stunning 27-inch 4K UHD IPS monitor for professionals and creatives.",
    description: "Experience breathtaking clarity and vibrant colors with the AuraVision 27-inch 4K UHD Monitor. Featuring an IPS panel for wide viewing angles and accurate color reproduction (99% sRGB), this monitor is perfect for graphic design, video editing, and content creation. Its slim bezel design and ergonomic stand make it a stylish and comfortable addition to any workspace.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Screen Size", value: "27-inch" },
      { name: "Resolution", value: "4K UHD (3840 x 2160)" },
      { name: "Panel Type", value: "IPS" },
      { name: "Refresh Rate", value: "60Hz" },
      { name: "Color Gamut", value: "99% sRGB" },
      { name: "Ports", value: "2x HDMI 2.0, 1x DisplayPort 1.4, USB Hub" },
      { name: "Ergonomics", value: "Height, Tilt, Swivel, Pivot Adjust" }
    ],
    stock: 25,
    sku: "AV-MON-274KIPS",
    manufacturer: "AuraVision Displays",
    dataAiHint: "4k monitor professional"
  },
  {
    id: "monitor-bs-24g",
    name: "ByteSync 24-inch Gaming Monitor",
    category: "Monitors",
    price: 15000.00,
    shortDescription: "Fast 24-inch Full HD gaming monitor with 144Hz refresh rate.",
    description: "Gain a competitive edge with the ByteSync 24-inch Gaming Monitor. Its blazing fast 144Hz refresh rate and 1ms response time (MPRT) deliver ultra-smooth visuals, eliminating motion blur and screen tearing. Adaptive-Sync technology ensures tear-free gaming. Ideal for fast-paced FPS, racing, and action games.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Screen Size", value: "24-inch" },
      { name: "Resolution", value: "Full HD (1920 x 1080)" },
      { name: "Panel Type", value: "TN (Twisted Nematic)" },
      { name: "Refresh Rate", value: "144Hz" },
      { name: "Response Time", value: "1ms (MPRT)" },
      { name: "Adaptive Sync", value: "Yes (FreeSync/G-SYNC Compatible)" },
      { name: "Ports", value: "1x HDMI 1.4, 1x DisplayPort 1.2" }
    ],
    stock: 40,
    sku: "BS-MON-24G144",
    manufacturer: "ByteSync Gaming",
    dataAiHint: "gaming monitor fast"
  },
  {
    id: "monitor-cv-32qhd",
    name: "ConnectView 32-inch Curved QHD Monitor",
    category: "Monitors",
    price: 32000.00,
    shortDescription: "Immersive 32-inch curved QHD VA monitor for productivity and entertainment.",
    description: "Upgrade your viewing experience with the ConnectView 32-inch Curved QHD Monitor. The 1500R curvature provides an immersive field of view, perfect for multitasking, gaming, and media consumption. Its QHD (2560 x 1440) resolution offers sharp details, while the VA panel delivers deep blacks and high contrast ratios. Features built-in speakers and multiple connectivity options.",
    images: ["https://placehold.co/600x400.png"],
    specifications: [
      { name: "Screen Size", value: "32-inch" },
      { name: "Resolution", value: "QHD (2560 x 1440)" },
      { name: "Panel Type", value: "VA (Vertical Alignment)" },
      { name: "Curvature", value: "1500R" },
      { name: "Refresh Rate", value: "75Hz" },
      { name: "Speakers", value: "Yes, 2x 3W" },
      { name: "Ports", value: "1x HDMI 2.0, 1x DisplayPort 1.2, 1x USB-C (DP Alt Mode)" }
    ],
    stock: 15,
    sku: "CV-MON-32CQHD",
    manufacturer: "ConnectView Solutions",
    dataAiHint: "curved monitor productivity"
  },
  {
    ...softwareTemplate,
    id: "sw-kasp-ts-1y1d",
    name: "Kaspersky Total Security (1 Year, 1 Device)",
    price: 3000.00,
    shortDescription: "Comprehensive protection against viruses, malware, and online threats.",
    description: "Kaspersky Total Security provides premium protection for your devices. It safeguards your privacy, money, identity, photos, and family against online dangers. Includes antivirus, anti-ransomware, webcam security, VPN, and more.",
    images: ["https://placehold.co/400x300.png"],
    specifications: [
      { name: "Protection Type", value: "Antivirus, Anti-Malware, Firewall, VPN" },
      { name: "Key Features", value: "Real-time protection, Secure Browsing, Parental Controls, Password Manager" },
      { name: "Subscription Term", value: "1 Year" },
      { name: "Device Limit", value: "1 Device" }
    ],
    sku: "KASP-TS-1Y1D",
    manufacturer: "Kaspersky Lab",
    dataAiHint: "antivirus software kaspersky"
  },
  {
    ...softwareTemplate,
    id: "sw-qheal-ts-1y1d",
    name: "Quick Heal Total Security (1 Year, 1 Device)",
    price: 2500.00,
    shortDescription: "Advanced protection against viruses, ransomware, and evolving cyber threats.",
    description: "Quick Heal Total Security offers robust security for your digital life. It features advanced DNAScan technology, ransomware protection, safe banking, and web security to keep you safe from all kinds of threats.",
    images: ["https://placehold.co/400x300.png"],
    specifications: [
      { name: "Protection Type", value: "Antivirus, Anti-Malware, Ransomware Protection, Firewall" },
      { name: "Key Features", value: "DNAScan, Anti-Keylogger, Parental Control, PCTuner" },
      { name: "Subscription Term", value: "1 Year" },
      { name: "Device Limit", value: "1 Device" }
    ],
    sku: "QHEAL-TS-1Y1D",
    manufacturer: "Quick Heal Technologies",
    dataAiHint: "antivirus software quickheal"
  },
  {
    ...softwareTemplate,
    id: "sw-mbytes-prem-1y1d",
    name: "Malwarebytes Premium (1 Year, 1 Device)",
    price: 2000.00,
    shortDescription: "Smart protection against malware, ransomware, and malicious websites.",
    description: "Malwarebytes Premium goes beyond traditional antivirus to find and remove malware, ransomware, and other advanced threats. Its real-time protection stops infections before they happen, and cleans up existing ones.",
    images: ["https://placehold.co/400x300.png"],
    specifications: [
      { name: "Protection Type", value: "Anti-Malware, Anti-Ransomware, Web Protection" },
      { name: "Key Features", value: "Real-time threat detection, Scheduled scans, Exploit protection" },
      { name: "Subscription Term", value: "1 Year" },
      { name: "Device Limit", value: "1 Device" }
    ],
    sku: "MBYTES-PREM-1Y1D",
    manufacturer: "Malwarebytes",
    dataAiHint: "malwarebytes software security"
  }
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}

    