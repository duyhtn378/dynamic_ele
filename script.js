// FILEPATH: c:/BCM_work_space/dynamic-ele/script.js
$(document).ready(function () {
  const $popup = $(".popup");
  const $overlay = $(".overlay");
  const $header = $(".popup-header");
  const $content = $(".popup-content");

  let currentIndex = null;
  const elements = $(".element");

  // Function to update popup content
  function updatePopup(index) {
    const element = elements.eq(index);
    $header.text(element.data("title"));
    $content.text(element.data("content"));
    currentIndex = index;
  }

  // Show popup
  elements.on("click", function () {
    const index = elements.index(this);
    updatePopup(index);
    $popup.fadeIn();
    $overlay.fadeIn();
  });

  // Close popup
  $overlay.on("click", function () {
    $popup.fadeOut();
    $overlay.fadeOut();
  });

  // Next button
  $(".next").on("click", function () {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % elements.length;
      updatePopup(nextIndex);
    }
  });

  // Prev button
  $(".prev").on("click", function () {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
      updatePopup(prevIndex);
    }
  });

  // Random floating function
  function randomFloat() {
    elements.each(function () {
      const randomX = Math.random() * 90; // Random position for X-axis (0% to 90% of screen width)
      const randomY = Math.random() * 90; // Random position for Y-axis (0% to 90% of screen height)
      const randomTime = Math.random() * 5 + 5; // Random duration (5s to 10s)
      $(this).css({
        transform: `translate(${randomX}vw, ${randomY}vh)`,
        transition: `${randomTime}s ease-in-out`,
      });
    });
  }

  // Start random floating
  setInterval(randomFloat, 5000); // Update position every 5 seconds
  randomFloat(); // Initial position
});
