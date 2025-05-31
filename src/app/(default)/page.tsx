
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Lightbulb, SearchCheck, Users, Wrench, Laptop, HardDrive } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExpertAdviceCard = () => (
  <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col md:flex-row items-center p-6 gap-6">
      <div className="flex-shrink-0">
        <div className="p-4 bg-accent/10 rounded-full inline-block">
          <Users className="h-12 w-12 text-accent" />
        </div>
      </div>
      <div className="flex-grow text-center md:text-left">
        <CardTitle className="font-headline text-2xl">Need Expert Advice?</CardTitle>
        <CardDescription className="mt-2 text-lg font-body">
          Our specialists are ready to help you select the best computers, accessories, or discuss repair options for your specific needs. Get personalized recommendations and technical support.
        </CardDescription>
      </div>
      <div className="flex-shrink-0 mt-4 md:mt-0">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">
            Consult Our Experts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  </Card>
);

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section with Flutter.dev inspired background gradient and image opacity */}
      <section className="relative text-center py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-15"> {/* Opacity was set to 15 during flutter theme update */}
            <Image
                src="https://placehold.co/1200x600.png"
                alt="Abstract Background of Computer Technology"
                fill
                objectFit="cover"
                data-ai-hint="computer technology"
            />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          {/* Headline size adjusted during initial flutter theme update */}
          <h1
            className="inline-block font-nothing text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}
          >
            Allied Electronics
          </h1>
          {/* Subtitle margin and size adjusted during initial flutter theme update */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70 sm:text-xl md:text-2xl font-headline">
            complete solution of your problem
          </p>
          {/* Button container margin adjusted, button shadows removed during initial flutter theme update */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/browse">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-muted/50 hover:text-foreground transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/contact">
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ExpertAdviceCard />
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">
          Explore Our Services & Tools
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4">
          <FeatureCard
            icon={<Laptop className="h-10 w-10 text-accent" />}
            title="PC & Laptop Advisor"
            description="Not sure which computer fits your needs? Our AI tool helps you find the perfect system."
            link="/selector"
            linkText="Find Your PC"
          />
          <FeatureCard
            icon={<SearchCheck className="h-10 w-10 text-accent" />}
            title="AI Product Finder"
            description="Use AI to search for specific computers, accessories, or parts with keywords or features."
            link="/ai-search"
            linkText="Try AI Search"
          />
          <FeatureCard
            icon={<Wrench className="h-10 w-10 text-accent" />}
            title="Expert Repair Services"
            description="Reliable PC and laptop repairs, from screen replacements to performance tune-ups."
            link="/browse?category=Repair+Services" // Link to repair services category
            linkText="View Repair Options"
          />
        </div>
      </section>

      <section className="py-12 text-center">
          <Image
            src="https://placehold.co/800x400.png"
            alt="Modern Laptops and Desktops"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-xl mb-8"
            data-ai-hint="laptops desktops"
          />
        <h2 className="font-headline text-3xl font-bold mb-4 text-primary">
          Your Trusted Tech Partner
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8 font-body">
          At Allied Electronics, we provide top-quality computers, accessories, and expert repair services. Whether for work, gaming, or everyday use, we have the solutions to power your digital life.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="/contact">
            Contact Our Tech Experts
          </Link>
        </Button>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="items-center">
        <div className="mb-4 p-3 bg-accent/10 rounded-full">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <CardDescription className="font-body">{description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center pt-4">
        <Button asChild variant="link" className="text-accent hover:text-accent/80">
          <Link href={link}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
