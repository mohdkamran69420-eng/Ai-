import fetch from "node-fetch";

const API_KEY = process.env.API_KEY;

async function askAI(question) {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: question }
        ]
      })
    }
  );

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

askAI("Hello");
