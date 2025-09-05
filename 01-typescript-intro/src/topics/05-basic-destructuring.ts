interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Sparks",
  details: {
    author: "Colplay",
    year: 2004,
  },
};

// const { song: anotherSong, songDuration: duration, details } = audioPlayer;

// const { author, year } = details;

// console.log("Cancion: ", anotherSong);
// console.log("Duracion: ", duration);
// console.log("Autor: ", author);
// console.log("Año: ", year);

//?Desestructuracion de arreglos

const [, , thor = "No encontrado"]: string[] = ["Spiderman", "IronMan"];

console.log("Personaje 0: ", thor);
