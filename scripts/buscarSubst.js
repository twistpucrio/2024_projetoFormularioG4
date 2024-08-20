
function limpar(){
    let texto = document.querySelector("#text");
    texto.value = " ";
    texto = document.querySelector("#find");
    texto.value = " ";
    texto = document.querySelector("#replace");
    texto.value = " ";
}

function substitui(entrada, altera){
    alert(entrada.replace(altera, "*******"));

    // exemplo com expressão regular
    alert("Expressão Regular: " + entrada.replace(/\w/, "removido"));
}

function split(entrada, corte){

}

// Para colocar os eventos dos botões quando a página for carregada
window.addEventListener("load", 
    function(){
        let btnLimpa = document.querySelector(".limpar")
        let btnValid = document.querySelector(".submeter")

        let btnSplit = document.querySelector("#btnSplit")
        let btnReplace = document.querySelector("#btnReplace")

        let entrada, altera

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

        btnSplit.addEventListener("click",
            function(){
                entrada = document.querySelector("#find")
                altera = document.querySelector('#replace')

                split(entrada, altera);
            }
        )

        btnReplace.addEventListener("click",
            function(){
                entrada = document.querySelector("#find")
                altera = document.querySelector('#replace')
                
                substitui(entrada.value, altera.value);
            }
        )
    }
)

// contar -> match