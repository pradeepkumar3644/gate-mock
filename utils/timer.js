export function startTimer(minutes) {
  let time = minutes * 60;
  const timeSpan = document.getElementById("time");

  const interval = setInterval(() => {
    time--;
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    timeSpan.innerText =
      `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    if (time <= 0) {
      clearInterval(interval);
      alert("Time over! Test submitted.");
    }
  }, 1000);
}
