async function askAI() {
  const userText = document.getElementById("input").value;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userText }] }]
      })
    }
  );

  const data = await response.json();
  document.getElementById("output").innerText =
    data.candidates[0].content.parts[0].text;
}
