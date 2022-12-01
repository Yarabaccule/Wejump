
const localCor = document.querySelectorAll("[local]");
const tipoCor = document.querySelectorAll("[tipo]");

localCor.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento)=> {
        cor = evento.target.getAttribute('local')
        verCores(cor)
    })
});

function verCores(padrao){
    for (var i = 0; i < tipoCor.length; i++){
        atual = tipoCor[i].getAttribute('tipo')
        if (padrao === atual){
            tipoCor[i].style.visibility = "visible"
        } else if (padrao != atual){
            tipoCor[i].style.display = "none"
        }

    }
};
