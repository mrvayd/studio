
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden h-full bg-card transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_20px_3px_hsl(var(--accent)/0.35)]">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block aspect-video relative overflow-hidden">
          <Image
            src={product.images[0] || "https://placehold.co/400x300.png"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.dataAiHint || "electronic component"}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="font-headline text-lg mb-2">
          <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-grow">
          {product.shortDescription}
        </CardDescription>
        <div className="mt-auto w-full bg-primary/10 text-primary py-3 px-4 rounded-lg text-center">
          <span className="font-semibold text-xl">₹{product.price.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}

