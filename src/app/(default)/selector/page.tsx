
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SlidersHorizontal, Loader2, AlertTriangle, CheckSquare, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { suggestComponents, type ComponentSelectorInput, type ComponentSelectorOutput } from '@/ai/flows/component-selector-flow';

const selectorSchema = z.object({
  purpose: z.string().min(10, 'Please describe the purpose in at least 10 characters.'),
  connectionType: z.string().optional(),
});

type SelectorFormData = z.infer<typeof selectorSchema>;

export default function SelectorPage() {
  const [results, setResults] = useState<ComponentSelectorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<SelectorFormData>({
    resolver: zodResolver(selectorSchema),
    defaultValues: {
      purpose: '',
      connectionType: '',
    },
  });

  const onSubmit: SubmitHandler<SelectorFormData> = async (data) => {
    setIsLoading(true);
    setResults(null);
    setError(null);
    try {
      const output = await suggestComponents({ 
        purpose: data.purpose,
        connectionType: data.connectionType || undefined // Ensure optional fields are passed correctly
      });
      setResults(output);
      if (output.length === 0) {
        toast({
            title: "No Suggestions",
            description: "The AI couldn't find any specific components for your query. Try rephrasing or adding more detail.",
            variant: "default",
        });
      } else {
        toast({
          title: "AI Suggestions Ready!",
          description: `Found ${output.length} potential components for your needs.`,
        });
      }
    } catch (e) {
      console.error("AI Component Selector Error:", e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred while fetching AI suggestions.";
      setError(errorMessage);
      toast({
        title: "Suggestion Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="shadow-xl border-accent/20">
        <CardHeader className="text-center">
          <Sparkles className="mx-auto h-16 w-16 text-accent mb-4" />
          <CardTitle className="font-headline text-3xl text-accent">AI Component Selector</CardTitle>
          <CardDescription className="text-lg">
            Describe your project's needs, and our AI will suggest suitable components and explain why.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Describe Component Purpose</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I need a microcontroller for a battery-powered wearable device that needs Bluetooth connectivity' or 'Looking for a sensor to measure ambient temperature and humidity with I2C interface'"
                        rows={5}
                        {...field}
                        className="text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="connectionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Preferred Connection / Package Type (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 'DIP', 'SMD SOIC-8', 'Through-hole', 'SPI interface'"
                        {...field}
                        className="text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-lg py-3 bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Asking AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get AI Suggestions
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
            <CardTitle className="text-destructive">Suggestion Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">AI Suggested Components ({results.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {results.length > 0 ? (
              results.map((item, index) => (
                <Card key={index} className="bg-card/50 p-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-accent"/>
                        {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground/90">Description:</span> {item.description}</p>
                    <p className="text-sm text-primary/90"><span className="font-medium text-foreground/90">AI Reasoning:</span> {item.reasoning}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
               !isLoading && <p className="text-muted-foreground text-center py-4">No specific components suggested for your query. Try to be more detailed or rephrase your purpose.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
