listaDeDestino = new Array(
    'Salvador',
    'RioDeJaniero',
    'SãoPaulo'
);

listaDeDestino.push('São Vicente');

const acompanhado = true;

const passagemComprada = true   ;

const idade = 17;

let destino = "São Vicente";

let contador = 0;

let espaco= "\n";

const verificacao =  (idade >= 18 || acompanhado) ;

console.log("Lista de destinos possiveis")

while(contador<=3){
    
    console.log(`

    ${listaDeDestino[contador]} ${espaco} `);
 
    contador ++;
}

console.log(`Escolhido pelo cliente ${destino}`)

if( passagemComprada && verificacao){
    console.log(`comprado com sucesso`)
    

contador = 0;
while(contador <=3 ){
    if(listaDeDestino[contador]== destino){
        console.log("Boa Viagem");
        break;
    }
    contador ++;
}

console.log("tudo certo boa viagem para"+ destino);
}else {
    console.log("Não pode ir")
}


