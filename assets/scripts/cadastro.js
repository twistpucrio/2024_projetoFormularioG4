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


function matchNumero(dados){
    const expressao = /[0-9]/g
    let resultado = dados.match(expressao);

    return resultado // retorno -1 = não há ocorrência
}


function buscarNum(dados){ // espaço em branco
    let resultado = dados.search(/\d/);
    console.log(resultado, resultado.value)
    return resultado // retorno -1 = não há ocorrência
}


// function ehLetra(dados){
//     const expressao = /[a-zA-Z áàâãéèêíïóôõöúçñÁÀ ÃÉÈÍÏÓÔÕÖÚÇÑ]/g
//     let resultado = dados.match(expressao);


//     return resultado // retorno -1 = não há ocorrência
// }

/* VALIDAÇÃO NOME */
function validarNome(campoNome){ //retorna o índice do achado
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/


    if (buscarNum(campoNome) === -1){
        console.log("Não há número")
    }
    else{
        console.log("erro")
    }


    if (nomeRegex.test(campoNome)){
        console.log("passou")
    }
    else{
        console.log("errouuu")
    }

    // for(dig of campoNome){
    //     if(null === ehLetra(dig)){
    //         alert("erro");
    //     }
    // }
}

/* VALIDAÇÃO CPF */
function validaCpf(cpf){
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/


    /* Máscara */
    let tamanhoCpf = cpf.value.length    
    if ((tamanhoCpf === 3) || (tamanhoCpf === 7)){
        cpf.value += ".";
    }
    else if(tamanhoCpf === 11){
        cpf.value += "-"
    }


    if (cpfRegex.test(cpf.value)){
        removeError(1)
    }
    else{
        setError(1)
    }    
}


/* VALIDAÇÃO DATA DE NASCIMENTO */
function validarDataNasc(dtNasc){
    let expressao = /\b(\d+\/+\d+\/+d)\b/g
}


/* VALIDAÇÃO USUÁRIO */
function validarUsuario(usuario){


}


/* VALIDAÇÃO EMAIL */
function validaEmail(email){
    let emailRegex = /^[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,}$/


    if (emailRegex.test(email.value)){
        removeError(4);
    }
    else{
        setError(4);
    }
}


/* VALIDAÇÃO SENHA */
function validaSenha(senha){
    const senhaRegex = /^(?=.*[A-Z])(?=.*[1-9])(?=.*[\W_]).{8,15}$/;


    console.log(senha.value)
    if (senhaRegex.test(senha.value)){
        removeError(5)
    }
    else{
        setError(5)
    }
}

/* VALIDAÇÃO CONFIRMAÇÃO DE SENHA */
function comparaSenhas(senha1, senha2){


    console.log(senha1.value, senha2.value)
    if (senha1.value === senha2.value){
        removeError(6)
    }
    else{
        setError(6)
    }
}


/* INDICADOR DE ERRO */
function setError(indice){
    let campos = document.querySelectorAll(".required")
    let spans = document.querySelectorAll(".span-required")


    campos[indice].style.border = "2px solid red";
    spans[indice].style.display = "block";
}

// campos[indice].type = "text"  -----------> para alterar a visualização

function removeError(indice){
    let campos = document.querySelectorAll(".required")
    let spans = document.querySelectorAll(".span-required")


    campos[indice].style.border = "";
    spans[indice].style.display = "none";
}


/* BLOCO PRINCIPAL */
window.addEventListener("load",
    function(){
        let btnLimpar = document.querySelector(".btnLimpar");
        let btnValidar = document.querySelector(".btnSubmeter")

        let nome, cpf, dtNasc, usuario, email, senha, confSenha;

        nome = document.querySelector("#nome");
        cpf = document.querySelector("#cpf");
        dtNasc = document.querySelector("#dataNasc")
        usuario = document.querySelector("#usuario")
        email = document.querySelector("#email")
        senha = document.querySelector("#senha")
        confSenha = document.querySelector("#confSenha")
        
       // nome  
       nome.addEventListener("input",
        function(){
            validaTamanho(0);
        }
        )    

        //cpf
        cpf.addEventListener("input",
            function(){
                validaCpf(cpf);
            }
        )

        // data nasc.

        
       // usuario


       // email
        email.addEventListener("input",
            function(){
                validaEmail(email);
            }
        )

        // senha
        senha.addEventListener("input",
            function(){
                validaSenha(senha);
     
                /* modo visualização */
                // senha.addEventListener("click",
                //     function(){
                //         senha.innerHTML.type = "text"
                //         senha.style.color = "orange"
                //     }
                   
                // )
            }
        )

        // confirmação senha
        confSenha.addEventListener("input",
            function(){
                comparaSenhas(senha, confSenha)
            }
        )

        // limpar
        btnLimpar.addEventListener("click",
            function(){
                valicaoCpf()
                limpar()
            }
        )

        // validação
        btnValidar.addEventListener("click",
            function(){
                nome = document.querySelector("#nome");
                cpf = document.querySelector("#cpf");
                senha = document.querySelector("#senha")
                dtNasc = document.querySelector("#dataNasc")
                usuario = document.querySelector("#usuario")
                email = document.querySelector("#email")
                senha = document.querySelector("#senha")
                confSenha = document.querySelector("#confSenha")


                validarNome(nome.value);
                validaCpf(cpf)
                // validarDataNasc(nasc);
                // validarUsuario(usuario);
                validaEmail(email)
                validaSenha(senha);  
            }
        )
    }
)
