function limpar(){
    let atividade = document.getElementsByName("tipoArquivo")
   
   
    for (at of atividade){
        at.checked = false
    }
   
}


function valRegras(nome){
    const exp = /[^([A-Z]{1})([A-Za-z_]{7-14})]/g;
    let resultado = texto.match(expressao);
    return resultado; 
}

function validar(){
    let nome = document.querySelector("#file").value;
    let selecionados = document.querySelectorAll("#tipoArquivo");
    let flag = false;

    selecionados.checked

    let vetor = nome.split(".");
    let extensao = vetor[1];
    nome = vetor[0];


    for(tipo of selecionados){

        if(extensao === "imagem"){
            if("png" === extensao.lower){
                flag = true;
            }
            else if("jpeg" === extensao.lower){
                flag = true;
            }
            else if("jpg" === extensao.lower){
                flag = true;
            }
        }


        if(tipo.lower === extensao.lower){
            flag = true;
        }
    }  
    
    if(flag){
        valRegras(nome);
    }

    if(flag){
        alert("oki");
    }
}


// function validarExtensao(arquivo, extensao){
//     // obs: arquivo é o elemento input:file inteiro

//     /* PEGAR O NOME DO ARQUIVO */

//     // alert(arquivo.value)
//     caminho = arquivo.value.split("\\");

//     // alert(caminho)
//     alert("Primeira forma: " + caminho[ caminho.length - 1])

//     /* outra maneira: */
//     let resposta = arquivo.files[0];
//     alert("Segunda forma: " + resposta.name)

//     /* PEGAR A EXTENSAO */
//     // split no ponto 
//     let indice = caminho.length - 1;
//     let comparacao = caminho[indice].split(".");
//     let ext = comparacao[comparacao.length - 1];
//     alert(ext)

//     if(extensao.lower === ext.lower){
//         alert("igual")
//     }
//     else{
//         alert("diferente")
//     }
// }


// Para colocar os eventos dos botões quando a página for carregada
window.addEventListener("load",
    function(){
        let btnLimpa = document.querySelector(".limpar")
        let btnValid = document.querySelector(".submeter")


       
        btnLimpa.addEventListener("click",
            function(){
                limpar();
            }
        )


        btnValid.addEventListener("click",
            function(){
                validar();
            }
        )
    }
)
