function mostrarLeiaMais() {
    var dots = document.getElementById("vazio");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leia Mais"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Comprimir";
      moreText.style.display = "inline";
    }
  }
