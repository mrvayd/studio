'use server';

/**
 * @fileOverview Implements the AI-powered parametric search flow.
 *
 * - aiParametricSearch - A function that takes a partial part number or description and returns suggested parts.
 * - AiParametricSearchInput - The input type for the aiParametricSearch function.
 * - AiParametricSearchOutput - The return type for the aiParametricSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiParametricSearchInputSchema = z.object({
  query: z.string().describe('A partial part number or a description of the desired part.'),
});
export type AiParametricSearchInput = z.infer<typeof AiParametricSearchInputSchema>;

const AiParametricSearchOutputSchema = z.array(
  z.object({
    partNumber: z.string().describe('The full part number of the suggested part.'),
    description: z.string().describe('A detailed description of the suggested part.'),
  })
);
export type AiParametricSearchOutput = z.infer<typeof AiParametricSearchOutputSchema>;

export async function aiParametricSearch(input: AiParametricSearchInput): Promise<AiParametricSearchOutput> {
  return aiParametricSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiParametricSearchPrompt',
  input: {schema: AiParametricSearchInputSchema},
  output: {schema: AiParametricSearchOutputSchema},
  prompt: `You are an expert in electronic components and parametric search.
  A user is trying to find a specific electronic component but only has a partial part number or a description of the part they need.
  Your job is to suggest a list of closely matching parts, even if the user has made misspellings or used synonyms.
  Consider manufacturer aliases and common misspellings when generating suggestions.

  User Query: {{{query}}}

  Return a JSON array of parts that match the query, with each object having a 'partNumber' and 'description' field.
  The partNumber should be a full, valid part number.
  The description should be a detailed description of the part, suitable for helping the user identify the correct component.
  Limit to a maximum of 5 suggestions.
  `,
});

const aiParametricSearchFlow = ai.defineFlow(
  {
    name: 'aiParametricSearchFlow',
    inputSchema: AiParametricSearchInputSchema,
    outputSchema: AiParametricSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
