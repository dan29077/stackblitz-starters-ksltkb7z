// usaPFDAO.mjs
import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs';

import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const pf = new PF();
pf.setNome('Ana');
pf.setEmail('ana@ifb.edu.br');
pf.setCPF('123.456.789-00');

const end = new Endereco();
end.setLogradouro('Rua das Flores');
end.setCep('70000-000');

pf.setEndereco(end);

const fone = new Telefone();
fone.setDdd('61');
fone.setNumero('98888-7777');

pf.addTelefone(fone);

const fone2 = new Telefone();
fone2.setDdd('62');
fone2.setNumero('97777-6666');

pf.addTelefone(fone2);

const pfdao = new PFDAO(pf);

const x = pfdao.toJSON();
pfdao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(pfdao.recoveryJSON());
