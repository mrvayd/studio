
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, SearchCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EngineerAdviceCard = () => (
  <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col md:flex-row items-center p-6 gap-6">
      <div className="flex-shrink-0">
        <div className="p-4 bg-accent/10 rounded-full inline-block">
          <Users className="h-12 w-12 text-accent" />
        </div>
      </div>
      <div className="flex-grow text-center md:text-left">
        <CardTitle className="font-headline text-2xl">Need Expert Advice?</CardTitle>
        <CardDescription className="mt-2 text-lg">
          Our specialists are ready to help you select the best components for your unique project requirements. Get personalized recommendations and technical support from our experts.
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
                alt="Abstract Background"
                fill
                objectFit="cover"
                data-ai-hint="circuit technology"
            />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          {/* Headline size adjusted during initial flutter theme update */}
          <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Allied Electronics
          </h1>
          {/* Subtitle margin and size adjusted during initial flutter theme update */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70 sm:text-xl md:text-2xl">
            complete solution of your problem
          </p>
          {/* Button container margin adjusted, button shadows removed during initial flutter theme update */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/browse">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/contact">
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <EngineerAdviceCard />
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 container mx-auto px-4">
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
          At Allied Electronics, we are committed to providing the components and support you need to bring your electronic projects to life. From hobbyists to professionals, we've got you covered.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href="/contact">
            Contact Our Engineers
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
