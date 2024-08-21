// -> radio, checkbox buttom - checked

function limpar(){
    let atividade = document.getElementsByName("tipoVerif");
    
    for (at of atividade){
        at.checked = false;
    }

    let texto = document.querySelector("#texto");

    texto.value = " ";
    
}


function valMaiusculo(texto){
    const expressao = /[A-Z]/g;

    let resultado = texto.match(expressao);
    return resultado; // retorno -1 = não há ocorrência
}

function validar(){
    let texto = document.querySelector("#texto").value;
    let resposta = document.querySelector("#cont");
    let maiuscula = document.getElementById("maiuscula");

    let qtd, tipo;

    if(maiuscula.checked){
       qtd = valMaiusculo(texto);
       tipo = "letras maiúsculas";
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



