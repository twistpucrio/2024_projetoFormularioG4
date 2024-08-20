
function limpar(){
    let texto = document.querySelector("#text");

    alert(texto.value);

    texto.value = "";

    /*texto.value = " ";
    texto = document.querySelector("#find");
    texto.value = " ";
    texto = document.querySelector("#replace");
    texto.value = " ";*/

}

function substitui(entrada,remover,subst){

    let novo = document.querySelector("#newText");

    let resp = entrada.replace(remover, subst);

    novo.value = resp;

    // exemplo com expressão regular
    // alert("Expressão Regular: " + entrada.replace(/\w/, "removido"));
}

function validar(){
    let entrada, remover, subst;
     
    entrada = document.querySelector("#text").value;
    remover = document.querySelector("#find").value;
    subst = document.querySelector("#replace").value;
    substitui(entrada,remover,subst);
}

// function split(entrada, corte){

// }

// Para colocar os eventos dos botões quando a página for carregada
window.addEventListener("load", 
    function(){
        let btnLimpa = document.querySelector(".limpar");
        let btnValid = document.querySelector(".submeter");

        // let btnSplit = document.querySelector("#btnSplit")
        // let btnReplace = document.querySelector("#btnReplace")



        btnLimpa.addEventListener("click",
            function(){
                limpar();
            }
        );

        btnValid.addEventListener("click", 
            function(){
                validar();
            }
        );

        // btnSplit.addEventListener("click",
        //     function(){
        //         entrada = document.querySelector("#find");
        //         altera = document.querySelector('#replace');

        //         split(entrada, altera);
        //     }
        // )

        // btnReplace.addEventListener("click",
        //     function(){
        //         entrada = document.querySelector("#find");
        //         altera = document.querySelector('#replace');
                
        //         substitui(entrada.value, altera.value);
        //     }
        // )
    }
);

// contar -> match