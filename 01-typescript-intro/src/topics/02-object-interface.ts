const skills: string[] = ["bash", "counter", "healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}

//objeto
const personaje: Character = {
  name: "gustavo",
  hp: 100,
  skills: ["bash", "counter"],
};

personaje.homeTown = "nuevo laredo";
console.table(personaje);

export {};
