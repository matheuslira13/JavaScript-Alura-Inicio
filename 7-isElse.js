listaDeDestino = new Array(
    'Salvador',
    'RioDeJaniero',
    'SãoPaulo'
);

acompanhado = true;

passagemComprada = false;

listaDeDestino.push('São Vicente');

console.log(` Destinos possiveis ${listaDeDestino}`);

let idade = 17;

if (idade >= 18 || acompanhado) {
    if (passagemComprada) {
        console.log('Maior de idade')
        listaDeDestino.splice(0, 1);
    }else {
        console.log("nao ")
    }
}



console.log(listaDeDestino);