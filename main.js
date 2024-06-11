function playMusica(idAudio){
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;

    tecla.onclick = function (){
        playMusica(idSom);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code==='Space' || evento.code==='Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    } 
}
