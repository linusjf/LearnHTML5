function toggle() {
  document.querySelectorAll('.btn').forEach((buttonElement) => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement);
    button.toggle();
  });
}
setInterval(toggle, 1000);
