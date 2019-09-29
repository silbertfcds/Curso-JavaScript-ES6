const usuario = {
    nome: 'silbert',
    idade: 23,
    endereco: {
        cidade: 'Parnamirim',
        estado: 'RN',
    },
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// desestruturação
// const {nome, idade, endereco: {cidade}} = usuario;


// console.log(nome);
// console.log(idade);
// console.log(cidade);

//desestruturação
function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);