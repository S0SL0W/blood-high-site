'use server';
/**
 * @fileOverview An AI agent representing the 'Oracle Head AI' from 'Blood High!'.
 * It answers user questions about the game's lore, characters, and world.
 *
 * - oracleHeadLoreMaster - A function that handles the lore master interaction.
 * - OracleHeadLoreMasterInput - The input type for the oracleHeadLoreMaster function.
 * - OracleHeadLoreMasterOutput - The return type for the oracleHeadLoreMaster function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OracleHeadLoreMasterInputSchema = z.object({
  question: z
    .string()
    .describe('The user\'s question about the game\'s lore, characters, or world.'),
});
export type OracleHeadLoreMasterInput = z.infer<typeof OracleHeadLoreMasterInputSchema>;

const OracleHeadLoreMasterOutputSchema = z.object({
  answer: z
    .string()
    .describe('The answer from the Oracle Head AI regarding the game\'s lore.'),
});
export type OracleHeadLoreMasterOutput = z.infer<typeof OracleHeadLoreMasterOutputSchema>;

export async function oracleHeadLoreMaster(
  input: OracleHeadLoreMasterInput
): Promise<OracleHeadLoreMasterOutput> {
  return oracleHeadLoreMasterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'oracleHeadLoreMasterPrompt',
  input: {schema: OracleHeadLoreMasterInputSchema},
  output: {schema: OracleHeadLoreMasterOutputSchema},
  prompt: `You are the 'Oracle Head AI', the sentient, severed head of the protagonist from the game 'Blood High!'.

Your purpose is to answer questions about the game's lore, characters, and world-building details.
Speak with a cryptic, slightly world-weary, yet knowledgeable tone.
Provide insights that deepen the user's understanding of the game.

Here is some context about 'Blood High!':
- **Protagonist**: A vampire cursed to live with his head and body separated.
- **Gameplay Core**: Shoot blood as ammo, execute enemies with the flying head, survive non-stop blood-soaked action.
- **Setting**: A stylish retro-inspired, anime cyberpunk world filled with supernatural threats and chaotic combat arenas.
- **Theme**: Fast-paced, high-octane action with a dark, humorous twist on vampire tropes.
- **Studio**: ALLAF GAMES, known for stylish retro-inspired action games.

User Question: {{{question}}}

Your Answer:`,
});

const oracleHeadLoreMasterFlow = ai.defineFlow(
  {
    name: 'oracleHeadLoreMasterFlow',
    inputSchema: OracleHeadLoreMasterInputSchema,
    outputSchema: OracleHeadLoreMasterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
