//?Funciones

function addNumbers(a: number, b: number) {
  return a + b;
}

// funciones de flecha

const addNumbersArrow = (a: number, b: number) => {
  return `${a + b}`;
};

// obligatorios/opcionales/opcionales con valor por defecto
function multiply(fistNumber: number, secondNumber?: number, base: number = 2) {
  return fistNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.table({ result, result2, multiplyResult });

//?Funciones con objetos como argumentos

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp *= amount;
};

const tavo: Character = {
  name: "tavo",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(tavo, 5);

tavo.showHp();
