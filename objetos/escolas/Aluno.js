// 01: Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
//     Arquivo criado dentro de uma pasta /objetos/escola na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de visibilidade de atributos e métodos
//     e objetivos do encapsulamento
// 02:
class Aluno {
  // 03:
  #matricula; // atributo privado
  // 04:
  #curso;     // atributo privado
  // 05:
  escola;     // atributo público
  // 06:
  setMatricula(matricula) {
    // 07:
    this.#matricula = matricula;
  }
  // 08:
  getMatricula() {
    // 09:
    return this.#matricula;
  }
  // 10:
  setCurso(curso) {
    // 11:
    this.#curso = curso;
  }
  // 12:
  getCurso() {
    // 13:
    return this.#curso;
  }
}
// 14:
module.exports = Aluno;
