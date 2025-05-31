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
import { SlidersHorizontal, Loader2, AlertTriangle, CheckSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const selectorSchema = z.object({
  purpose: z.string().min(10, 'Please describe the purpose in at least 10 characters.'),
  connectionType: z.string().optional(),
});

type SelectorFormData = z.infer<typeof selectorSchema>;

interface MockComponentResult {
  name: string;
  description: string;
  suitability: string;
}

const mockResultsDatabase: MockComponentResult[] = [
    { name: "ATmega328P Microcontroller", description: "Versatile 8-bit MCU, commonly used in Arduino boards.", suitability: "Good for general purpose control and embedded applications."},
    { name: "ESP32-WROOM-32D Module", description: "Powerful Wi-Fi and Bluetooth enabled microcontroller module.", suitability: "Excellent for IoT projects requiring wireless connectivity."},
    { name: "BC547 NPN Transistor", description: "General purpose NPN bipolar junction transistor.", suitability: "Suitable for switching and amplification in low-power circuits."},
    { name: "LM358 Op-Amp", description: "Dual operational amplifier, low power consumption.", suitability: "Ideal for signal conditioning and analog processing."},
    { name: "1N4007 Diode", description: "General purpose 1A rectifier diode.", suitability: "Commonly used for rectification and reverse polarity protection."}
];

export default function SelectorPage() {
  const [results, setResults] = useState<MockComponentResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
    
    // Simulate API call or complex logic
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock logic: return a few random components from the database
    const shuffled = [...mockResultsDatabase].sort(() => 0.5 - Math.random());
    const selectedResults = shuffled.slice(0, Math.floor(Math.random() * 3) + 2); // 2 to 4 results

    setResults(selectedResults);
    setIsLoading(false);
    toast({
      title: "Suggestions Ready!",
      description: `Found ${selectedResults.length} potential components for your needs.`,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="shadow-xl border-accent/20">
        <CardHeader className="text-center">
          <SlidersHorizontal className="mx-auto h-16 w-16 text-accent mb-4" />
          <CardTitle className="font-headline text-3xl text-accent">Component Selection Tool</CardTitle>
          <CardDescription className="text-lg">
            Describe your project's needs, and we'll suggest suitable components.
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
                        placeholder="e.g., 'I need a component to control a small DC motor based on temperature input' or 'Looking for a sensor to detect light levels for an outdoor system'"
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
                        placeholder="e.g., 'DIP', 'SMD', 'Through-hole', 'SPI interface'"
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
                    Finding Components...
                  </>
                ) : (
                  <>
                    <SlidersHorizontal className="mr-2 h-5 w-5" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Suggested Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.length > 0 ? (
              results.map((item, index) => (
                <Card key={index} className="bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-accent"/>
                        {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                    <p className="text-sm text-primary/80"><span className="font-medium">Suitability:</span> {item.suitability}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">No specific suggestions found based on your input. Try rephrasing.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
