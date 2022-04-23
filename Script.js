let pratoscadastrados= [
    { nome:"Bife acebolado" , preco : 12.0 },
    { nome:"Peito de frango", preco : 10.0 },
    { nome:"Carne de panela", preco : 11.5},
];
let acompanhamentoscadastrados = [
    {nome:"Salada", preco: 5.5},
    {nome:"Maionese", preco: 4.25},
    {nome:"Farofa", preco: 3.0},
    {nome:"Torresmo", preco: 6.0},
];
function script(){
    let nome = document.getElementById("nome").value;
    if(nome === ""){
        alert("Nome precisa ser digitado !");
    }
    else
    {
        let pratos = document.getElementsByName("prato_principal");
        let pratoescolhido;
        let precofinal = 0;
        for(var ele of pratos){
           if(ele.checked){
               pratoescolhido = pratoscadastrados[ele.value];
               precofinal += pratoscadastrados[ele.value].preco;
           }
        }
        let acompanhamentosescolhidos = [];
        let acompanhamentos = document.getElementsByName("acompanhamento");
        for(var ele of acompanhamentos){
            if(ele.checked){
                acompanhamentosescolhidos.push(acompanhamentoscadastrados[ele.value]);
                precofinal += acompanhamentoscadastrados[ele.value].preco;
            }
        }
        let empresa_desconto = document.querySelector(".form-select").value;
        
        if ( empresa_desconto != "" )
        {
            precofinal = precofinal - (precofinal * (empresa_desconto/100));
        }



        let saida = document.getElementById("saida");
        saida.innerHTML = `<br>Caro(a) <b>${nome}</b>`;
        saida.innerHTML += "<br><br>Seu pedido está em preparação";
        saida.innerHTML += "<br><br>";
        saida.innerHTML += `Voce escolheu ${pratoescolhido.nome} - R$ ${pratoescolhido.preco}`;
        saida.innerHTML += "<br><br>";
        if(acompanhamentosescolhidos.length > 0){
            saida.innerHTML += "Voce escolheu os seguintes acompanhamentos:";
            for(var ele of acompanhamentosescolhidos)
            {
                saida.innerHTML += `<br> ${ele.nome} - R$ ${ele.preco}`;
            }
        }
        if( empresa_desconto != "")
        {
            saida.innerHTML += `Você obteve um desconto de: ${empresa_desconto}%`;
            saida.innerHTML += "<br><br>";
        }
        saida.innerHTML += `<h2> Total do pedido: R$ ${precofinal}</h2>`;
        saida.innerHTML += "<br><br>";
        saida.innerHTML += "<br><br>";
    }

}
