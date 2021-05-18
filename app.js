const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "pm" : "am";

  if (h > 12) {
    h -= 12;
  }

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
    <span>${ampm}</span>
    `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
