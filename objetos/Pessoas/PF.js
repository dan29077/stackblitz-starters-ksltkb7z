// 01: Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais
// 02:
const Pessoa = require('./Pessoas');
// 03:
class PF extends Pessoa {
  // 04:
  #cpf;
  // 05:
  setCPF(cpf) {
    // 06:
    if (cpf) {
      // 07:
      this.#cpf = cpf;
      // 08:
      return true;
    } else {
      // 09:
      return false;
    }
  }
  // 10:
  getCPF() {
    // 11:
    return this.#cpf;
  }
}
// 12:
module.exports = PF;
