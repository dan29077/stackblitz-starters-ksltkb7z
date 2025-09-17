const Pessoa = require('./Pessoas');

class Endereco {
    #logradouro;
    #cep;
  
    setEndereco(logradouro, cep) {
      if (logradouro && cep ) {
        this.#logradouro = logradouro;
        this.#cep = cep;
        return true;
      }
      return false;
    }
  
    getEndereco() {
      return {
        lograduro: this.#logradouro,
        cep: this.#cep,
      };
    }
  }
  module.exports = Endereco;