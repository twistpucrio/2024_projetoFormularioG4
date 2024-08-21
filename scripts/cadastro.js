/* REGEX */

/*
    Funções
        - search
        - match -> retorna um vetor com todos
        - exec -> retorna um valor com as informações
        - test -> para um
        - replace -> faz a função e troca
        - split (não usareremos no projeto)
*/

function limpar(){
    let texto = document.getElementsByClassName("texto")

   for (at of texto){
        at.value = ""
   }
    
}

function buscarNum(dados){


    let resultado = dados.search(/\d/);
    return resultado // retorno -1 = não há ocorrência
}

// let d = "arroz, batata2, lasanha3, pastel4";
// alert(d)

// let resposta = buscarNum(d)
// alert("índice: "+ resposta + "\nPrimeiro número: " + d[resposta]);

// O search() retorna o índice da primeira ocorrência do padrão desejado

// match => conta

function matchNumero(dados){
    const expressao = /[0-9]/g
    let resultado = dados.match(expressao);

    return resultado // retorno -1 = não há ocorrência
}

function ehLetra(dados){
    const expressao = /[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g
    let resultado = dados.match(expressao);

    return resultado // retorno -1 = não há ocorrência
}

function valicaoCpf(cpf){
    
    function valicaoCpf(numCpf){
    
        let cpf = document.querySelector("#cpf").value; 
        
        let expressao = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g
    
        let resultado = numCpf.test(expressao)
        alert(resultado)
    
        if (expressao.test(value)){
            alert("correto")
        }
        else{
            alert("CPF Inválido!");
            // colocar o foco
            return false
        }
        
    
        let numeros = cpf.length
        
        alert("num ocorrencias: " + a + numeros)
    
        // let cpf = document.querySelector("#cpf").value 
                    
                    // if(cpf != ""){  
                        
                    //     let resp = matchNumero(cpf)                   
                    //     alert("Números: "+ resp );
                    //     console.log(cpf)
    
                    //     resp = buscarNum(cpf)
                    //     alert("índice: "+ resp + "\nPrimeiro número: " + cpf[resp]);
                    //     console.log(cpf)
    
                    // }
                    
                    // else{
                    //     alert("Campo")
                    // }
    }
}

function validarNome(nome){
    

    for(dig of nome){
        if(null===ehLetra(dig)){
            alert("erro");
        }
    }
}

function verificarTamanho(minTamanho, maxTamanho){
    
}

function validarExtensao(arquivo, extensao){
    // obs: arquivo é o elemento input:file inteiro

    /* PEGAR O NOME DO ARQUIVO */

    // alert(arquivo.value)
    caminho = arquivo.value.split("\\");

    // alert(caminho)
    alert("Primeira forma: " + caminho[ caminho.length - 1])

    /* outra maneira: */
    let resposta = arquivo.files[0];
    alert("Segunda forma: " + resposta.name)

    /* PEGAR A EXTENSAO */
    // split no ponto 
    let indice = caminho.length - 1;
    let comparacao = caminho[indice].split(".");
    let ext = comparacao[comparacao.length - 1];
    alert(ext)

    if(extensao.lower === ext.lower){
        alert("igual")
    }
    else{
        alert("diferente")
    }
}

function validarSenha(senha){

}

function validarDataNasc(dtNasc){
    let expressao = /\b(\d+\/+\d+\/+d)\b/g 
}

function validarUsuario(usuario){

}


window.addEventListener("load", 
    function(){
        let btnLimpar = document.querySelector(".btnLimpar");
        let btnValidar = document.querySelector(".btnSubmeter")

        let nome, nasc, arq, usuario, senha;
        
        btnLimpar.addEventListener("click", 
            function(){
                
                

                valicaoCpf()

                limpar()
            }

        )

        btnValidar.addEventListener("click",
            function(){
                nome = document.querySelector("#nome").value;
                // nasc = document.querySelector("#dataNasc").value;
                // arq = document.querySelector("#arq")
                // usuario = document.querySelector("#usuario")
                // senha = document.querySelector("#senha")

                validarNome(nome);
                // validarDataNasc(nasc);
                // validarExtensao(arq, "doc");
                // validarSenha(senha);
                // validarUsuario(usuario);
            }
        )
    }
)