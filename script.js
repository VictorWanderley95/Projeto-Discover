function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Pegar a tag img
  const img = document.querySelector("#profile img");

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver em light mode, mudar a imagem
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    //Se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/avatar.png");
  }
}
