// 01: Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Jurídica)
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de Herança e sobrescrita de métodos,
//     bem como encapsulamento adicionados de condicionais e operadores de comparação
// 02:
const Pessoa = require('./Pessoa');
// 03:
class PJ extends Pessoa {
  // 04:
  #cnpj;
  // 05
  setCNPJ(cnpj) {
    /*
      Operadores de comparação:
      <   : menor que
      >   : maior que
      <=  : menor ou igual que
      >=  : maior ou igual que
    */    
    // 06:
    if (cnpj) {
      // 07:
      if (cnpj.length < 18) {
        return false;
      }
      // 08:
      this.#cnpj = cnpj;
      return true;
    } else {
      // 09:
      return false;
    }
  }
  // 10:
  getCNPJ() {
    return this.#cnpj;
  }
  // 11:
  // sobrescrita do método setEmail
  setEmail(email) {
    /*
      Operadores de comparação:
      ==   : igualdade frouxa
      ===  : igualdade estrita
      !=   : diferença frouxa
      !==  : diferença estrita
    */
    // 12:
    if (email !== '') {
      // 13:
      if (email.includes('@')) {
        super.setEmail(email); // chama o método original da classe base
        return true;
      }
    } else {
      // 14:
      return false;
    }
  }
}
// 15:
module.exports = PJ;
