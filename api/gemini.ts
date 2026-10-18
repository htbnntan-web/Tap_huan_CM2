import { GoogleGenAI } from '@google/genai';
import type { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  method?: string;
  body?: {
    prompt?: string;
  } | string;
}

interface VercelResponse extends ServerResponse {
  status: (statusCode: number) => VercelResponse;
  json: (body: unknown) => VercelResponse;
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable.' });
  }

  try {
    const parsedBody =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const prompt = typeof parsedBody.prompt === 'string' ? parsedBody.prompt.trim() : '';

    if (!prompt) {
      return res.status(400).json({ error: 'A valid "prompt" string is required in request body.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = response.text ?? '';
    return res.status(200).json({ text });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return res.status(500).json({ error: message });
  }
}
