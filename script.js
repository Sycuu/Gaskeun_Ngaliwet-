function getTargetDate() {
  const now = new Date();
  const target = new Date(now);

  // Rabu = 3
  const day = now.getDay();
  let diff = (3 - day + 7) % 7;

  target.setDate(now.getDate() + diff);
  target.setHours(7, 0, 0, 0);

  // Jika sudah lewat Rabu jam 7, ke Rabu minggu depan
  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }

  return target;
}

const target = getTargetDate();

function updateCountdown() {
  const now = new Date();
  const distance = target - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML =
      "<h2 style='grid-column:1/5;color:#1572d3;'>🎉 Waktunya Ngaliwett!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance / (1000*60*60)) % 24);
  const minutes = Math.floor((distance / (1000*60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}

updateCountdown();
setInterval(updateCountdown, 1000);