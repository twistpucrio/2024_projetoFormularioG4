// -> radio, checkbox buttom - checked


function limpar(){
    let atividade = document.getElementsByName("tipoVerif");
   
    for (at of atividade){
        at.checked = false;
    }


    let texto = document.querySelector("#texto");


    texto.value = " ";

    texto = document.querySelector("#cont");

    texto.value = " ";

   
}


function valMinusculo(texto){
    const expressao = /[a-z]/g;


    let resultado = texto.match(expressao);
    return resultado; // retorno -1 = não há ocorrência
}


function valMaiusculo(texto){
    const expressao = /[A-Z]/g;


    let resultado = texto.match(expressao);
    return resultado; // retorno -1 = não há ocorrência
}


function valDigito(texto){
    const expressao = /[0-9]/g;


    let resultado = texto.match(expressao);
    return resultado; // retorno -1 = não há ocorrência
}


function valCaracEsp(texto){
    const expressao = /\W/g;


    let resultado = texto.match(expressao);
    return resultado; // retorno -1 = não há ocorrência
}




function validar(){
    let texto = document.querySelector("#texto").value;
    let resposta = document.querySelector("#cont");
    let maiuscula = document.getElementById("maiuscula");
    let minuscula = document.getElementById("minuscula");
    let digito = document.getElementById("numerico");
    let caracEspecial = document.getElementById("carcEspecial");




    let qtd, tipo;


    if(maiuscula.checked){
       qtd = valMaiusculo(texto);
       tipo = "letras maiúsculas";
    }
    else if(minuscula.checked){
        qtd = valMinusculo(texto);
        tipo = "letras minúsculas";
     }
     else if(digito.checked){
        qtd = valDigito(texto);
        tipo = "digito númerico";
     }
     else if(caracEspecial.checked){
        qtd = valCaracEsp(texto);
        tipo = "caracter especial";
     }
     else{
        alert("Selecione uma verificação");
     }


    if(qtd === null){
        resposta.value = `Padrão ${tipo} não encontrado`;
    }
    else{
        qtd = qtd.length;
        resposta.value = `Padrão ${tipo} encontrado, quantidade de ocorrências ${qtd}`;
    }
}


function executar(n, t){
    const padrao = RegExp('maria*', 'g');


    let resposta;
    resposta = padrao.exec(n);


    alert("Nome: " + resposta);


    resposta = padrao.exec(t)
    alert("Texto: " + resposta)
}


function testar(n, t){
    const padrao = new RegExp('maria*', 'g');
    let resposta = padrao.test(n);


    alert("Nome: " + resposta)


    resposta = padrao.test(t);
    alert("Texto: " + resposta)
}


// Para colocar os eventos dos botões quando a página for carregada
window.addEventListener("load",
    function(){
        let btnLimpa = document.querySelector(".limpar")
        let btnValid = document.querySelector(".submeter")


        let btnTestar = document.querySelector("#btnTest")
        let btnExecutar = document.querySelector("#btnExec")


        let nome, texto;
                 
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


        btnTestar.addEventListener("click",
            function(){


                nome = document.querySelector("#nome");
                texto = document.querySelector('#texto');


                testar(nome.value, texto.value);
            }
        )


        btnExecutar.addEventListener("click",
            function(){


                nome = document.querySelector("#nome");
                texto = document.querySelector('#texto');


                executar(nome.value, texto.value);
            }
        )
    }
)