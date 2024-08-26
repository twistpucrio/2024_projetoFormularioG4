function limpar(){
    let texto = document.querySelector("#text");


    // alert(texto.value);


    texto.value = "";


    texto.value = " ";
    texto = document.querySelector("#find");
    texto.value = " ";
    texto = document.querySelector("#replace");
    texto.value = " ";
    texto = document.querySelector("#newText");
    texto.value = " ";


}


function substitui(entrada,remover,subst){


    let novo = document.querySelector("#newText");

    // let qtd = subst.length;
    let resp;

    while(entrada.search(remover) != -1){
        resp = entrada.replace(remover, subst);
        entrada = resp;
    }


    novo.value = entrada;


    // exemplo com expressão regular
    // alert("Expressão Regular: " + entrada.replace(/\w/, "removido"));
}


/*<<<<<<< aula-regex
function split(entrada, corte){
    let resultado = entrada.split(corte)
    alert(resultado)


    // for( el of resultado){
    //     alert(el);
    // }
=======*/
function validar(){
    let entrada, remover, subst;
     
    entrada = document.querySelector("#text").value;
    remover = document.querySelector("#find").value;
    subst = document.querySelector("#replace").value;
    substitui(entrada,remover,subst);


}


//function split(entrada, corte){


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


/*<<<<<<< aula-regex
                split(entrada.value, altera.value);
            }
        )
=======*/
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
