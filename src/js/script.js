let musicas = [
    {
        titulo: 'Nome da Música 1',
        artista: 'Nome do Artista 1',
        src: './src/musicas/musica1.mp3',
        img: './src/img/cover1.jpg'
    },
    // Adicione mais músicas aqui
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.max-duration');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.song-title');
let nomeArtista = document.querySelector('.artist-name');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.play-pause').addEventListener('click', tocarMusica);
document.querySelector('.bi-skip-start-fill').addEventListener('click', anteriorMusica);
document.querySelector('.bi-skip-end-fill').addEventListener('click', proximaMusica);

// Funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    if(musica.paused) {
        musica.play();
        document.querySelector('.bi-play-circle-fill').classList.remove('bi-play-circle-fill');
        document.querySelector('.play-pause i').classList.add('bi-pause-circle-fill');
    } else {
        musica.pause();
        document.querySelector('.bi-pause-circle-fill').classList.remove('bi-pause-circle-fill');
        document.querySelector('.play-pause i').classList.add('bi-play-circle-fill');
    }
}

function anteriorMusica() {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica);
    musica.play();
}

function proximaMusica() {
    indexMusica++;
    if(indexMusica >= musicas.length) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play();
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}
