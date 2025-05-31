
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { aiParametricSearch, type AiParametricSearchOutput } from '@/ai/flows/ai-parametric-search';
import { Search, Loader2, AlertTriangle, FileText, ChevronRight } from 'lucide-react'; // Changed BrainCircuit to Search
import { useToast } from '@/hooks/use-toast';

const searchSchema = z.object({
  query: z.string().min(3, 'Query must be at least 3 characters long.'),
});

type SearchFormData = z.infer<typeof searchSchema>;

export default function AiSearchPage() {
  const [results, setResults] = useState<AiParametricSearchOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
    },
  });

  const onSubmit: SubmitHandler<SearchFormData> = async (data) => {
    setIsLoading(true);
    setResults(null);
    setError(null);
    try {
      // The AI flow `aiParametricSearch` still expects 'part number' style input/output.
      // This will need to be updated when the flow itself is refactored for computers/accessories.
      const output = await aiParametricSearch({ query: data.query });
      setResults(output);
      if (output.length === 0) {
        toast({
            title: "No Results",
            description: "The AI couldn't find any matching products or services for your query.",
            variant: "default",
        });
      }
    } catch (e) {
      console.error("AI Product Finder Error:", e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(`Failed to perform AI search: ${errorMessage}`);
      toast({
        title: "Search Failed",
        description: `An error occurred: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="shadow-xl border-primary/20">
        <CardHeader className="text-center">
          <Search className="mx-auto h-16 w-16 text-primary mb-4" />
          <CardTitle className="font-headline text-3xl text-primary">AI Product Finder</CardTitle>
          <CardDescription className="text-lg">
            Enter keywords, features, or model names. Our AI will find matching computers, accessories, or services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Search Query</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 'gaming laptop RTX 4070' or 'wireless ergonomic mouse'"
                        {...field}
                        className="text-base py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-lg py-3 bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Search with AI
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader className="flex flex-row items-center gap-2">
             <AlertTriangle className="h-6 w-6 text-destructive" />
            <CardTitle className="text-destructive">Search Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Search Results ({results.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.length > 0 ? (
              // The structure of `item` (partNumber, description) comes from the *current*
              // ai-parametric-search flow. This will change when that flow is updated for computers.
              results.map((item, index) => (
                <Card key={index} className="bg-card/50 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary"/> 
                      {item.partNumber} {/* This should become item.name or item.model */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-accent p-0 h-auto">
                        View Details <ChevronRight className="h-4 w-4 ml-1"/>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">No matching products or services found for your query.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
