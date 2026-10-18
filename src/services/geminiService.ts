export interface GeminiResponse {
  text: string;
}

export async function generateGeminiContent(prompt: string): Promise<string> {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    let errorMessage = `Request failed with status ${response.status}`;
    try {
      const errorData = (await response.json()) as { error?: string };
      if (errorData?.error) {
        errorMessage = errorData.error;
      }
    } catch {
      // Fallback to default status error message if response is not JSON
    }
    throw new Error(errorMessage);
  }

  const data = (await response.json()) as GeminiResponse;
  return data.text;
}
