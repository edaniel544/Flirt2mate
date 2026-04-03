const lines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Are you French? Because Eiffel for you.",
  "Are you a Wi-Fi signal? Because I'm feeling a connection.",
  "Do you have a Band-Aid? I just scraped my knee falling for you.",
  "If you were a vegetable, you’d be a cute-cumber.",
  "Are you a time traveler? Because I see you in my future."
];

function getLine() {
  const line = lines[Math.floor(Math.random() * lines.length)];
  alert(line);
}
