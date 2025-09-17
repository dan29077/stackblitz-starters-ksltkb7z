// 02: Forma 1: Atribuição direta na declaração (valores mistos)
let dadosAluno = ['João', 12345, true];
//console.log('dadosAluno:', dadosAluno);
//console.log('dadosAluno:', dadosAluno[0]);



// 03: Forma 2: Criando array vazio e atribuindo por índice
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
//console.log('curso:', curso);
//console.log('curso:', curso[1]);


// 04: Forma 3: Usando o construtor Array()
let notas = new Array(7.5, 8.0, 6.9);
//console.log('notas:', notas);


// 05: Forma 4: Atribuição de múltiplos tipos diretamente com array literal
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
//console.log('infoSistema:', infoSistema);


// 06: Forma 5: Atualizando valores em um array existente
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
//console.log('infoSistema atualizado:', infoSistema);

// 07: Forma 6: Array com tipos uniformes (booleans)
let status = [true, false, true, true];
//console.log('status:', status);
//console.log('Status:', status[3]);

// 08: Forma 7: Array com strings (nomes de cursos)
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
//console.log('cursos:', cursos);


cursos.push("Laranja");      // adiciona ao final
//console.log(cursos);

cursos.unshift("uva");       // adiciona ao início
//console.log(cursos);

cursos.pop(5);                // remove "laranja"
//console.log(cursos)

cursos.shift(0);              // remove "uva"
//console.log(cursos);        

let aluno = []; 
    aluno[0] = "Ana"; 
    aluno[1] = 17;
    aluno[2]  = 8.5;
    //console.log(aluno);

    aluno.push("Daniel", 17, 7.5 );
//console.log(aluno);

aluno.unshift("Guiherme", 18, 9.0);
//console.log(aluno);



