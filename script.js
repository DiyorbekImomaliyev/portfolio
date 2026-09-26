function openProject(id) {
  document.getElementById(id).showModal();
}

function closeProject(id) {
  document.getElementById(id).close();
}

// Close a popup when clicking outside it
document.querySelectorAll(".popup").forEach(function (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.close();
    }
  });
});
