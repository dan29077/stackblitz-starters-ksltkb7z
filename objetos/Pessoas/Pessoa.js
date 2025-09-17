// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais
// 02:
class Pessoa {
    // 03:
    #nome;
    // 04:
    #email;
    // 05:
    setNome(nome) {
      // 06:
      if (nome) {
        // 07:
        this.#nome = nome;
        // 08:
        return true;
      } else {
        // 09:
        return false;
      }
    }
    // 10:
    getNome() {
      // 11:
      return this.#nome;
    }
    // 12:
    setEmail(email) {
      // 13:
      if (email) {
        // 14:
        this.#email = email;
        // 15:
        return true;
      } else {
        // 16:
        return false;
      }
    }
    // 17:
    getEmail() {
      // 18:
      return this.#email;
    }
  }
  // 19:
  module.exports = Pessoa;
  