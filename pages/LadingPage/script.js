function mostrarLeiaMais() {
    var dots = document.getElementById("vazio");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var div = document.getElementById("secondDiv");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leia Mais"; 
      moreText.style.display = "none";
      div.setAttribute("style", "height: 110vh");
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Comprimir";
      moreText.style.display = "inline";
      div.setAttribute("style", "height: 150vh");
    }
  }

  var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});