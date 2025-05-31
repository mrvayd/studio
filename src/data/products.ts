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
    id: "arduino-uno-r3",
    name: "Arduino Uno R3",
    category: "Microcontrollers",
    price: 23.00,
    shortDescription: "The classic Arduino board for beginners and experts.",
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Microcontroller", value: "ATmega328P" },
      { name: "Operating Voltage", value: "5V" },
      { name: "Input Voltage (recommended)", value: "7-12V" },
      { name: "Digital I/O Pins", value: "14 (6 PWM)" },
      { name: "Analog Input Pins", value: "6" },
      { name: "Flash Memory", value: "32 KB" },
      { name: "SRAM", value: "2 KB" },
      { name: "EEPROM", value: "1 KB" },
      { name: "Clock Speed", value: "16 MHz" },
    ],
    stock: 150,
    sku: "SKU-UNO-R3",
    manufacturer: "Arduino",
    dataAiHint: "arduino microcontroller"
  },
  {
    id: "raspberry-pi-4b-4gb",
    name: "Raspberry Pi 4 Model B (4GB)",
    category: "Single-Board Computers",
    price: 55.00,
    shortDescription: "Powerful single-board computer for various projects.",
    description: "The Raspberry Pi 4 Model B offers a significant increase in processor speed, multimedia performance, memory, and connectivity compared to the prior-generation Raspberry Pi 3 Model B+, while retaining backwards compatibility and similar power consumption. For the end user, Raspberry Pi 4 Model B provides desktop performance comparable to entry-level x86 PC systems.",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Processor", value: "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz" },
      { name: "Memory", value: "4GB LPDDR4-3200 SDRAM" },
      { name: "Connectivity", value: "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE, Gigabit Ethernet" },
      { name: "USB", value: "2 USB 3.0 ports; 2 USB 2.0 ports." },
      { name: "Video & sound", value: "2 × micro-HDMI ports (up to 4kp60 supported)" },
    ],
    stock: 85,
    sku: "SKU-RPI4-4GB",
    manufacturer: "Raspberry Pi Foundation",
    dataAiHint: "raspberrypi computer"
  },
  {
    id: "resistor-kit-1ohm-1mohm",
    name: "Resistor Kit (1 Ohm - 1M Ohm, 1/4W)",
    category: "Passive Components",
    price: 12.99,
    shortDescription: "Assorted resistor kit with common values.",
    description: "A comprehensive kit of 1/4 Watt, +/- 1% tolerance metal film resistors. Includes a variety of commonly used values from 1 Ohm to 1M Ohm, perfect for breadboarding and prototyping electronic circuits. Comes organized in a convenient storage box.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Type", value: "Metal Film Resistors" },
      { name: "Power Rating", value: "1/4 Watt" },
      { name: "Tolerance", value: "±1%" },
      { name: "Range", value: "1Ω to 1MΩ (multiple values)" },
      { name: "Quantity", value: "Approx. 500 pieces (25 values, 20 pcs each)" },
    ],
    stock: 200,
    sku: "SKU-RESKIT-001",
    dataAiHint: "resistors kit"
  },
  {
    id: "capacitor-kit-electrolytic",
    name: "Electrolytic Capacitor Kit",
    category: "Passive Components",
    price: 15.50,
    shortDescription: "Variety pack of common electrolytic capacitors.",
    description: "This kit includes a wide range of electrolytic capacitors with various capacitance values and voltage ratings. Essential for power supply filtering, audio coupling, and timing circuits. Organized in a durable plastic case for easy access.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Type", value: "Electrolytic Capacitors" },
      { name: "Voltage Range", value: "10V to 50V" },
      { name: "Capacitance Range", value: "0.1uF to 1000uF" },
      { name: "Quantity", value: "Approx. 200 pieces (multiple values)" },
    ],
    stock: 120,
    sku: "SKU-CAPKIT-ELY-001",
    dataAiHint: "capacitors kit"
  },
  {
    id: "soldering-iron-kit-60w",
    name: "Soldering Iron Kit (60W Adjustable)",
    category: "Tools & Equipment",
    price: 25.99,
    shortDescription: "Complete soldering kit for electronics work.",
    description: "A 60W adjustable temperature soldering iron kit, ideal for hobbyists and professionals. Includes soldering iron, multiple tips, solder wire, desoldering pump, stand, and tweezers. Temperature range from 200°C to 450°C.",
    images: [
      "https://placehold.co/600x400.png",
    ],
    specifications: [
      { name: "Power", value: "60W" },
      { name: "Temperature Range", value: "200°C - 450°C (Adjustable)" },
      { name: "Includes", value: "Soldering Iron, 5 Tips, Solder, Pump, Stand, Tweezers" },
      { name: "Voltage", value: "110V / 220V (selectable)" },
    ],
    stock: 70,
    sku: "SKU-SOLKIT-60W",
    dataAiHint: "soldering kit"
  }
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id);
}
