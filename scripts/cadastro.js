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

function matchNumero(dados){
    const expressao = /[0-9]/g
    let resultado = dados.match(expressao);
    return resultado // retorno -1 = não há ocorrência
}

function validarExtensao(arquivo, extensao){

}

function validarSenha(senha){

}

function validarDataNasc(dtNasc){

}

function validarUsuario(usuario){

}

function validarNomeArq(nomeArquivo){

}



window.addEventListener("load", 
    function(){
        let btnLimpar = document.querySelector(".btnLimpar");
        let btnValidar = document.querySelector(".btnSubmeter")

        let nome, nasc, arq, usuario, senha;
        
        btnLimpar.addEventListener("click", 
            function(){
                let cpf = document.querySelector("#cpf").value 
                if(cpf != ""){  
                    
                    let resp = matchNumero(cpf)                   
                    alert("Números: "+ resp );
                    console.log(cpf)

                    resp = buscarNum(cpf)
                    alert("índice: "+ resp + "\nPrimeiro número: " + cpf[resp]);
                    console.log(cpf)

                }
                else{
                    alert("Campo")
                }

                limpar()
            }

        )

        btnValidar.addEventListener("click",
            function(){
                nome = document.querySelector("#nome").value;
                nasc = document.querySelector("#dataNasc").value;
                arq = document.querySelector("#arq")
                usuario = document.querySelector("#usuario")
                senha = document.querySelector("#senha")
            }
        )
    }
)