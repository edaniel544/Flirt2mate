const lines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Are you French? Because Eiffel for you.",
  "Are you a Wi-Fi signal? Because I'm feeling a connection."
];

function getLine() {
  const line = lines[Math.floor(Math.random() * lines.length)];
  alert(line);
}