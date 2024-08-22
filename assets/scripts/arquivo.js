function limpar(){
    let atividade = document.getElementsByName("tipoArquivo")
   
   
    for (at of atividade){
        at.checked = false
    }
   
}


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
