// function valRegras(nome){
//     const exp = /[^([A-Z]{1})([A-Za-z_]{7-14})]/g;
//     let resultado = texto.match(expressao);
//     return resultado;
// }


// function validar(){
//     let nome = document.querySelector("#file").value;
//     let selecionados = document.querySelectorAll("#tipoArquivo");
//     let flag = false;


//     selecionados.checked


//     let vetor = nome.split(".");
//     let extensao = vetor[1];
//     nome = vetor[0];




//     for(tipo of selecionados){


//         if(extensao === "imagem"){
//             if("png" === extensao.lower){
//                 flag = true;
//             }
//             else if("jpeg" === extensao.lower){
//                 flag = true;
//             }
//             else if("jpg" === extensao.lower){
//                 flag = true;
//             }
//         }




//         if(tipo.lower === extensao.lower){
//             flag = true;
//         }
//     }  


//     if(flag){
//         valRegras(nome);
//     }


//     if(flag){
//         alert("oki");
//     }
// }


function validarNomeArquivo(arquivo){
    // obs: arquivo é o elemento input: file inteiro


    const nomeArqRegex = /^[A-ZÀ-Ö][A-Za-zÀ-ÖØ-öø-ÿ0-9_]{7,14}$/


    /* PEGAR O NOME DO ARQUIVO */


    // separa o nome (com extensão) no caminho
    let separaCaminhoNome = arquivo.value.split("\\");
    console.log("nome arquivo (Separação): " , separaCaminhoNome, separaCaminhoNome.value)


    // separa o nome da extensão
    let separaNomeComExtensao = separaCaminhoNome[2].split("."); // split no ponto
    console.log("caminho: " , separaNomeComExtensao, separaNomeComExtensao.value)


    let indiceExtensao = separaNomeComExtensao.length -1 // índice do último, que é a extensão
    let nomeSemExtensao = ""
    let i = 0
    while (i < indiceExtensao){ // judy, faria -> judyfaria
        nomeSemExtensao += separaNomeComExtensao[i]
        i ++
    }


    let nomeArq = nomeSemExtensao


    if (nomeArqRegex.test(nomeArq)){
        removeError(0)
    }
    else{
        setError(0)
    }    
}


function validarExtensao(arquivo, extensao){
    // obs: arquivo é o elemento input: file inteiro


    // VERIFICAÇÃO DE CHECKBOX
    let checkbox = document.getElementsByClassName("tipoArquivo");// pegar os checkbox
    // console.log(checkbox, checkbox.values)


    var arr = []/* Cria array com todos os names dos check selecionados */;
    // var inputElements = document.getElementsByClassName('check') /* Busca todos os elementos com o class check */;
   
    for(var i=0; checkbox[i]; ++i){
        if(checkbox[i].checked) /* Verifique se o elemento em questão está com o atributo checked marcado */
        arr.push(checkbox[i].name) /* Inclui name do elemento em um array*/;
    }
   

    console.log(arr)

    /* Apontar o erro se a extensão não estiver marcada*/
    // pegar a  extensão e verificar se ela está presente na array (arr)
    //  se estiver, então permite. Se não, retorna erro


    /* PEGAR A EXTENSAO */
    let caminho = arquivo.value.split("."); // split no ponto
   
    let indice = caminho.length - 1; // último da lista -> a extensão
    let comparacao = caminho[indice].split("."); // separa pelos pontos
    let extensaoArq = comparacao[comparacao.length - 1]; // pega a extensão


    let flag = false


    for ( e of arr){
        console.log("imagem: ", e == "imagem")
        console.log("extensao: ", extensao == "")
        if (e == extensaoArq){
            flag = true
        }
        
        //feito
        else if(e == "imagem"){
            if("png" == extensaoArq){
                flag = true;
            }
            else if("jpeg" == extensaoArq){
                flag = true;
            }
            else if("jpg" == extensaoArq){
                flag = true;
            }
        }

    }

    console.log(arr, extensaoArq)


    if (flag == true){
        removeError(1);
    }
    else{
        setError(1)
    }


}


function setError(indice){
    let campo = document.querySelector("#file")
    let spans = document.querySelectorAll(".span-required")


    campo.style.border = "2px solid red";
    spans[indice].style.display = "block";
}


function removeError(indice){
    let campo = document.querySelector("#file")
    let spans = document.querySelectorAll(".span-required")


    campo.style.border = "";
    spans[indice].style.display = "none";
}




// Para colocar os eventos dos botões quando a página for carregada
window.addEventListener("load",
    function(){
        let btnLimpa = document.querySelector(".limpar")
        let btnValid = document.querySelector(".submeter")


        let arq = document.querySelector("#file")
        console.log(arq.value)




        btnLimpa.addEventListener("click",
            function(){
                limpar();
            }
        )
           


        btnValid.addEventListener("click",
            function(){
                validarNomeArquivo(arq)
                validarExtensao(arq, "docs");
            }
        )
    }
)

