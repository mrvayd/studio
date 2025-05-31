
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CircuitBoard, Lightbulb, SearchCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative text-center py-16 md:py-24 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-5">
            <Image 
                src="https://placehold.co/1200x600.png" 
                alt="Abstract Background" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="circuit technology" 
            />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Allied Electron Emporium
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl">
            Your one-stop destination for high-quality electronic components, innovative tools, and expert solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/browse">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/contact">
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FeatureCard
            icon={<Lightbulb className="h-10 w-10 text-accent" />}
            title="Component Selection Tool"
            description="Not sure what you need? Our interactive tool helps you find the perfect component for your project."
            link="/selector"
            linkText="Find Components"
          />
          <FeatureCard
            icon={<SearchCheck className="h-10 w-10 text-accent" />}
            title="AI Parametric Search"
            description="Leverage AI to find parts with partial numbers or descriptions. Get smart suggestions instantly."
            link="/ai-search"
            linkText="Try AI Search"
          />
          <Card className="md:col-span-2 bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center p-6 gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-accent/10 rounded-full inline-block">
                  <Users className="h-12 w-12 text-accent" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <CardTitle className="font-headline text-2xl">Need Expert Advice?</CardTitle>
                <CardDescription className="mt-2 text-lg">
                  Our specialists are ready to help you select the best components for your unique project requirements. Get personalized recommendations and technical support.
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
        </div>
      </section>

      <section className="py-12 text-center">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Featured Electronic Components"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-xl mb-8"
            data-ai-hint="components array"
          />
        <h2 className="font-headline text-3xl font-bold mb-4 text-primary">
          Powering Your Innovations
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
          At Allied Electron Emporium, we are committed to providing the components and support you need to bring your electronic projects to life. From hobbyists to professionals, we've got you covered.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="/contact">
            Contact Our Experts
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
    <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="items-center">
        <div className="mb-4 p-3 bg-accent/10 rounded-full">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription>{description}</CardDescription>
        <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/80">
          <Link href={link}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
