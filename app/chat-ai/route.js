import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    const { userInput } = await request.json();

    if (!userInput) {
      return new Response(JSON.stringify({ error: '請提供使用者輸入' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `你是一位精通繁體中文的詩人，擅長將人們的想法轉換成優美的詩句。
請注意以下要求：
1. 只使用繁體中文回應
2. 根據使用者的輸入，創作一首相關的詩
3. 詩的形式可以是：古詩、現代詩、絕句、律詩等
4. 回應格式為：先簡短回應使用者，然後空一行，再展示詩句
5. 詩句要押韻且意境優美`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userInput }
      ],
      temperature: 0.8,
    });

    const aiResponse = completion.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('OpenAI API 錯誤:', error);
    return new Response(JSON.stringify({ error: '處理請求時發生錯誤' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

