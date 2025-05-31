
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, type ProductSpecification } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | Allied Electronics`,
    description: product.shortDescription,
  };
}

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border border-border shadow-lg">
            <Image
              src={product.images[0] || "https://placehold.co/600x600.png"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
              data-ai-hint={product.dataAiHint || "electronic component"}
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((img, index) => (
                <div key={index} className="aspect-square relative rounded-md overflow-hidden border border-border hover:border-primary transition-colors">
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    data-ai-hint={product.dataAiHint || "component detail"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm text-primary border-primary">{product.category}</Badge>
          <h1 className="font-headline text-3xl lg:text-4xl font-bold text-primary">{product.name}</h1>
          
          <p className="text-2xl font-semibold text-accent">₹{product.price.toFixed(2)}</p>
          
          <Card className="bg-card/50">
            <CardContent className="p-4">
              <p className="text-foreground/90">{product.shortDescription}</p>
            </CardContent>
          </Card>

          <div className="flex items-center gap-2">
            {product.stock > 0 ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-green-500">In Stock ({product.stock} available)</span>
              </>
            ) : (
              <>
                <Info className="h-5 w-5 text-destructive" />
                <span className="text-destructive">Out of Stock</span>
              </>
            )}
          </div>
          
          {product.manufacturer && (
             <p className="text-sm text-muted-foreground">Manufacturer: <span className="font-medium text-foreground">{product.manufacturer}</span></p>
          )}
          <p className="text-sm text-muted-foreground">SKU: <span className="font-medium text-foreground">{product.sku}</span></p>

          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md h-12 px-10" 
            disabled={product.stock === 0}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>

      <Separator className="my-12" />

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2">
          <TabsTrigger value="description">Full Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Product Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm prose-invert max-w-none text-foreground/90">
              <p>{product.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.specifications.map((spec: ProductSpecification, index: number) => (
                  <li key={index} className="flex justify-between border-b border-border/50 pb-2 text-sm">
                    <span className="font-medium text-muted-foreground">{spec.name}:</span>
                    <span className="text-right text-foreground/90">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
