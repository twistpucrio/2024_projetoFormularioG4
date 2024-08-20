
function limpar(){
    let texto = document.querySelector("#text");
    alert(texto.value);

    texto.value = "";
    
}

function substitui(entrada,remover,subst){

    alert(entrada.replace(remover, subst));

    // exemplo com expressão regular
    // alert("Expressão Regular: " + entrada.replace(/\w/, "removido"));
}

function validar(){
    let entrada, remover, subst;
     
    entrada = document.querySelector("#text");
    remover = document.querySelector("#find");
    subst = document.querySelector("#replace");
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