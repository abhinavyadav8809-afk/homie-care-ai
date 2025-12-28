async function askAI() {
  const userText = document.getElementById("input").value;

  const response = await fetch(
    "AIzaSyCM4vWW5lRpdFl1b73fIZapW_TVEOc7mbU",
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
