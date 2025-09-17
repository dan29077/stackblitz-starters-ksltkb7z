const Pessoa = require('./Pessoas');

class Telefone {
    #ddd;
    #numero;
  
    setTelefone(ddd, numero) {
      if (ddd && numero) {
        this.#ddd = ddd;
        this.#numero = numero;
        return true;
      }
      return false;
    }
  
    getTelefone() {
      return {
        ddd: this.#ddd,
        numero: this.#numero,
      };
    }
  }
  module.exports = Telefone;