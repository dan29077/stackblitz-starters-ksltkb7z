// usaAlunoDAO.mjs
import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';

import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const aluno = new Aluno();
aluno.setNome('Daniel');
aluno.setEmail('daniel@ifb.edu.br');
aluno.setCPF('987.654.321-00');
aluno.setMatricula('2023123456');
aluno.setCurso('Engenharia de Software');

const end = new Endereco();
end.setLogradouro('St. Qi QI 24');
end.setCep('72135-240');

aluno.setEndereco(end);

const fone1 = new Telefone();
fone1.setDdd('61');
fone1.setNumero('99132-5974');

const fone2 = new Telefone();
fone2.setDdd('61');
fone2.setNumero('99461-0094');

aluno.addTelefone(fone1);
aluno.addTelefone(fone2);

const alunoDAO = new AlunoDAO(aluno);

const x = alunoDAO.toJSON();
alunoDAO.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(alunoDAO.recoveryJSON());
