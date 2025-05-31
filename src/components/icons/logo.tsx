import { Cpu } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
      <Cpu size={32} />
      <span className="font-headline text-xl font-bold">Allied Electronics</span>
    </Link>
  );
}
