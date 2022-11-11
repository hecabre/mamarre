function moverPosicionRandom(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.random() * (window.innerHeigh - elm.offsetHeight) + 'px';
  elm.style.top = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseover', function(e) { moverPosicionRandom(e.target); })

btnSi.addEventListener("click", function(e){
    alert("Yo sabia que la mamazota lo movia");
    divModoSexo.style.display = 'block';
    const audio = new Audio("assets\\audio.mp3");
    audio.play();
})