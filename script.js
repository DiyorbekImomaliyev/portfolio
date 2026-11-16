function openProject(id) {
  var popup = document.getElementById(id);
  // Load videos only when the popup opens
  popup.querySelectorAll("iframe[data-src]").forEach(function (frame) {
    frame.src = frame.dataset.src;
  });
  popup.showModal();
}

function closeProject(id) {
  document.getElementById(id).close();
}

document.querySelectorAll(".popup").forEach(function (popup) {
  // Close a popup when clicking outside it
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.close();
    }
  });

  // Stop videos when the popup closes (button, backdrop click or Esc)
  popup.addEventListener("close", function () {
    popup.querySelectorAll("iframe[data-src]").forEach(function (frame) {
      frame.removeAttribute("src");
    });
  });
});
