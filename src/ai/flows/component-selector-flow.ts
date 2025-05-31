
'use server';
/**
 * @fileOverview An AI-powered electronic component selector.
 *
 * - suggestComponents - A function that suggests components based on user input.
 * - ComponentSelectorInput - The input type for the suggestComponents function.
 * - ComponentSelectorOutput - The return type for the suggestComponents function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ComponentSelectorInputSchema = z.object({
  purpose: z.string().describe('A detailed description of what the component will be used for or the problem it needs to solve.'),
  connectionType: z.string().optional().describe('Any preferred connection type, package type, or interface (e.g., DIP, SMD, SPI, I2C).'),
});
export type ComponentSelectorInput = z.infer<typeof ComponentSelectorInputSchema>;

const ComponentSuggestionSchema = z.object({
  name: z.string().describe('The common name of the suggested electronic component (e.g., "LM741 Op-Amp", "ATmega328P Microcontroller").'),
  description: z.string().describe('A brief technical description of the component and its key features.'),
  reasoning: z.string().describe('A clear explanation of why this specific component is a good fit for the user\'s stated purpose and preferences, highlighting how its features address the need.'),
});

const ComponentSelectorOutputSchema = z.array(ComponentSuggestionSchema).describe("An array of component suggestions, typically 3-5 items.");
export type ComponentSelectorOutput = z.infer<typeof ComponentSelectorOutputSchema>;

export async function suggestComponents(input: ComponentSelectorInput): Promise<ComponentSelectorOutput> {
  return componentSelectorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'componentSelectorPrompt',
  input: {schema: ComponentSelectorInputSchema},
  output: {schema: ComponentSelectorOutputSchema},
  prompt: `You are an expert electronic components advisor with deep knowledge of a wide range of components, their specifications, and common applications.
A user needs help selecting an electronic component. They have provided the following information:

1.  **Purpose/Problem:** {{{purpose}}}
{{#if connectionType}}
2.  **Preferred Connection/Package Type (Optional):** {{{connectionType}}}
{{/if}}

Your task is to analyze this information and suggest a list of 3 to 5 highly relevant electronic components. For each suggestion, you MUST provide:
    -   **name:** The common market name of the component (e.g., "Raspberry Pi Pico", "NE555 Timer IC", "2N3904 NPN Transistor").
    -   **description:** A concise technical description highlighting its main function and key features relevant to the user's query.
    -   **reasoning:** A detailed explanation of *why* this component is a good suggestion for the user's specific purpose and any specified connection/package type. Explain how its features meet the user's needs. Be specific and justify your choice.

Focus on providing practical, accurate, and genuinely useful suggestions. If the user's request is too vague, try to make reasonable assumptions or suggest versatile components, clearly stating your assumptions in the reasoning.
Ensure your output is a JSON array of objects, adhering to the specified schema.
`,
});

const componentSelectorFlow = ai.defineFlow(
  {
    name: 'componentSelectorFlow',
    inputSchema: ComponentSelectorInputSchema,
    outputSchema: ComponentSelectorOutputSchema,
  },
  async input => {
    // Basic safety/validation, though Zod handles schema.
    if (!input.purpose || input.purpose.trim().length < 10) {
        // This case should ideally be caught by form validation on client,
        // but as a fallback, return empty or a specific error structure.
        return []; 
    }

    const {output} = await prompt(input);
    return output || []; // Ensure output is never undefined
  }
);

