"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import Image from 'next/image';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsLoading(true);
    console.log('Contact Form Data:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    form.reset(); 
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
      variant: 'default',
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <CheckCircle className="mx-auto h-24 w-24 text-green-500 mb-6" />
        <h1 className="font-headline text-3xl font-bold text-primary mb-4">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your message has been successfully sent. Our team will review it and get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto py-8">
        <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold text-primary">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
            Have questions about our products, services, or need technical support? Fill out the form, and our team will be happy to assist you.
            </p>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-accent"/>
                    <a href="mailto:support@alliedelectron.com" className="text-foreground hover:text-primary">support@alliedelectron.com</a>
                </div>
                 {/* Add more contact info like phone or address if needed */}
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Customer Support Team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint="support team"
                />
            </div>
        </div>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent">Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Question about Arduino Uno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Please type your message here..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
