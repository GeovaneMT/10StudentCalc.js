alert("Lista de estudantes");

const classmates = [
  {
    name: "Luiz",
    prova1: 10,
    prova2: 8,
  },
  {
    name: "Alexandra",
    prova1: 6,
    prova2: 8,
  },
  {
    name: "Carlos",
    prova1: 3,
    prova2: 7,
  },
];

function calcAverage(student) {
  const average = Math.round((student.prova1 + student.prova2) / 2);
  return average;
}

function calcResult(average) {
  return average >= 7 ? "Aprovado" : "Reprovado";
}

function printMath() {
  for (let student of classmates) {
    const average = calcAverage(student);
    const result = calcResult(average);
    const mathMessage = `
      Nome: ${student.name}
      Nota da primeira prova: ${student.prova1}
      Nota da segunda prova: ${student.prova2}
      Média: ${average}
      Situação: ${result}
    `;
    
    alert(mathMessage);
  }
}

printMath();
