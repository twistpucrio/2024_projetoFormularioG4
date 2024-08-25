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
    let texto = document.querySelector("#nome");
    texto.value = "";
    texto = document.querySelector("#cpf");
    texto.value = "";
    texto = document.querySelector("#dataNasc");
    texto.value = "";
    texto = document.querySelector("#usuario");
    texto.value = "";
    texto = document.querySelector("#email");
    texto.value = "";
    texto = document.querySelector("#senha");
    texto.value = "";
    texto = document.querySelector("#confSenha");
    texto.value = "";
   
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
    const expressao = /[a-zA-Z áàâãéèêíïóôõöúçñÁÀ ÃÉÈÍÏÓÔÕÖÚÇÑ]/g
    let resultado = dados.match(expressao);


    return resultado // retorno -1 = não há ocorrência
}


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


function buscarNum(dados){ // espaço em branco
    let resultado = dados.search(/\d/);
    console.log(resultado, resultado.value)
    return resultado // retorno -1 = não há ocorrência
}


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


// function validaTamanho(){
//     let campos = document.querySelectorAll(".required")
   
//     if (campos[0].value.length < 3){
//         setError(0)




//     }
//     else{
//         removeError(0)
//     }
// }






function validaDataNasc(dtNasc){
    let dtNascRegex = /^\d{4}\-\d{2}\-\d{2}$/g


    /* o formato da data mostrada será escolhido baseado na localização definida
        no navegador do usuário, enquanto que a data em value sempre será formatado
        como yyyy-mm-dd */


    if (dtNascRegex.test(dtNasc.value)){
        removeError(2);
    }
    else{
        setError(2);
    }
}


function validarUsuario(usuario){
    let usuarioRegex = /^[a-z](?!.*[A-Z\s])[\w.]{0,}$/


    /* Explicação Regex:
        - ^: Início da string.
        - [a-z]: Garante que o primeiro caractere seja uma letra minúscula.
        - (?!.*[A-Z\s]): Lookahead que impede a presença de letras maiúsculas ou espaços em branco em qualquer posição na string.
        - [\w.]{2,}: Permite letras minúsculas, números, underscore (_) e ponto final (.), com pelo menos 2 caracteres após
         'o primeiro (o primeiro já foi garantido como letra minúscula).
        - $: Fim da string. */


    console.log(usuario, usuario.value)
    if (usuarioRegex.test(usuario.value)){
        removeError(3);
    }
    else{
        setError(3);
    }
   
}


function validaEmail(email){
    let emailRegex = /^[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,}$/


    if (emailRegex.test(email.value)){
        removeError(4);
    }
    else{
        setError(4);
    }
}


function validaSenha(senha){
    const senhaRegex = /^(?=.*[A-Z])(?=.*[1-9])(?=.*[\W_]).{8,15}$/;


    console.log(senha.value)
    if (senhaRegex.test(senha.value)){
        senha.addEventListener("input",
            function(){
                removeError(5)
            }
        )
           
    }
    else{
        setError(5)
    }
}


function comparaSenhas(senha1, senha2){


    console.log(senha1.value, senha2.value)
    if (senha1.value === senha2.value){
        senha.addEventListener("input",
            function(){
                removeError(6)
            }
        )
    }
    else{
        setError(6)
    }
}




function setError(indice){
    let campos = document.querySelectorAll(".required")
    let spans = document.querySelectorAll(".span-required")


    campos[indice].style.border = "2px solid red";
    spans[indice].style.display = "block";
}


function removeError(indice){
    let campos = document.querySelectorAll(".required")
    let spans = document.querySelectorAll(".span-required")


    campos[indice].style.border = "";
    spans[indice].style.display = "none";
}


window.addEventListener("load",
    function(){
        let btnLimpar = document.querySelector(".btnLimpar");
        let btnValidar = document.querySelector(".btnSubmeter")


        let campos = document.querySelectorAll(".required")


        let email = document.querySelector("#email")


        let nome, nasc, arq, usuario, senha, cpf;


        senha = document.querySelector("#senha")
        nome = document.querySelector("#nome");
        nasc = document.querySelector("#dataNasc");
        usuario = document.querySelector("#usuario")
        confSenha = document.querySelector("#confSenha")
        cpf = document.querySelector("#cpf")
       
        nasc.addEventListener("focusout",
            function(){
                validaDataNasc(nasc);
            }
        )


        usuario.addEventListener("focusout",
            function(){
                validarUsuario(usuario)
            }
        )
               
        cpf.addEventListener("input",
            function(){
                validaCpf(cpf);
            }
        )


        nome.addEventListener("input",
            function(){
                validaTamanho(0);
            }
        )
       
        email.addEventListener("input",
            function(){
                validaEmail(email);
            }
        )


        senha.addEventListener("focusout",
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


        confSenha.addEventListener("input",
            function(){
                comparaSenhas(senha, confSenha)
            }
        )


        btnLimpar.addEventListener("click",
            function(){
                limpar()
            }


        )


        btnValidar.addEventListener("click",
            function(){
                senha = document.querySelector("#senha")
                nome = document.querySelector("#nome");
                nasc = document.querySelector("#dataNasc").value;
                arq = document.querySelector("#arq")
                usuario = document.querySelector("#usuario")
                confSenha = document.querySelector("#confSenha")
                cpf = document.querySelector("#cpf")


                validarNome(nome.value);
                validaCpf(cpf);
                validarDataNasc(nasc);
                validarExtensao(arq, "doc");
                validaSenha(senha);
                validarUsuario(usuario);
                validaTamanho(0)
                validaEmail(email)
            }
        )
    }
)
