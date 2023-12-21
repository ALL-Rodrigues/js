

function jogar(){
    var n1 = parseInt(document.getElementById("jogador").value);
    var n2 = parseInt(Math.floor(Math.random() * 5 - 1) + 1);
    //alert(n1);
    //alert(document.getElementById("jogador").value);

    //math.floor(math.random() * 100 - 1) + 1;
    document.getElementById("maquina").value = n2;

    if ((n1 + n2) % 2 === 0){
        document.getElementById("ganhador").innerHTML = "gangador é  o jogador";
        
    }else {
       document.getElementById("ganhador").innerHTML = "gangador é  a maquina";

    }

}

// return Math.random() * (max - min) + min;
//let numeroAleatorio = Math.floor(Math.random() * 100);
//sconsole.log(numeroAleatorio);


// let n1 = Intl;
// function numero(jogador){

    // alert(document.getElementById("jogador"))
    // if ( jogador == n1){
        // var gamer = document.getElementById("jogador")
        // document.getElementById("saida").innerHTML = jogador.value + "n1";

        // numeroJogador = true;
        // alert("numero registrado!");
    // } else {
        // alert("numero não registrado!")
    // }
// }


