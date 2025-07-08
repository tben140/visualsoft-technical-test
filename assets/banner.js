document.addEventListener("DOMContentLoaded", function () {
  const countdownTimerElement = document.querySelector(
    ".banner-countdown-timer"
  );

  const countdownTime = parseInt(
    countdownTimerElement.getAttribute("countdown"),
    10
  );

  let countdownEndTime = countdownTime * 1000;

  function updateCountdown() {
    let now = Date.now();
    let timeLeft = countdownEndTime - now;

    if (timeLeft < 0) {
      timeLeft = 0;
    }

    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    document.querySelectorAll(
      ".banner-countdown-timer-item-value"
    )[0].textContent = days.toString().padStart(2, "0");
    document.querySelectorAll(
      ".banner-countdown-timer-item-value"
    )[1].textContent = hours.toString().padStart(2, "0");
    document.querySelectorAll(
      ".banner-countdown-timer-item-value"
    )[2].textContent = minutes.toString().padStart(2, "0");
    document.querySelectorAll(
      ".banner-countdown-timer-item-value"
    )[3].textContent = seconds.toString().padStart(2, "0");

    // If time is up, clear the interval
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      countdownTimerElement.innerHTML =
        '<span class="banner-countdown-timer-item"><span class="banner-countdown-timer-item-label">Sale Ended</span></span>';
    }
  }

  // Update the countdown every second
  let timerInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();
});
