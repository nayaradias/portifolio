var listaTimes = ["vasco", "botafogo", "fluminense", "flamengo", "atletico-mg", "atletico-pr", "atletico-go", "cruzeiro", "corinthians", "santos", "chapecoense", "vitoria", "america-mg", "sao-paulo", "palmeiras", "gremio", "internacional", "remo", "paysandu", "parana", "avai", "brasiliense", "criciuma", "desportiva", "rio-branco", "santa-cruz", "fortaleza", "barcelona", "real-madrid", "santa-cruz", "porto", "lazio", "psg", "coritiba", "figeurense", "ceara", "sport", "nautico", "bahia", "estudiantes", "boca-juniors", "nacional", "olimpia", "emelec"];
var Qtd = listaTimes.length - 1;
var Posicao = Math.round(Math.random() * Qtd);
var Palavra = listaTimes.length;
var Tamanho = Palavra.length;
var caixaLetras = [];
var Acertos;
var errosMax = 7;
var Erros;
var Desenhos = [];
var Acertou = false;
var Jogando = false;

function defineLetras(l) {
    var Auxiliar;
    for (var i = 0; i < 20; i++){
        Auxiliar = document.getElementById("letra" + i).value = "";
        Auxiliar = document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < l; i++){
        Auxiliar = document.getElementById("letra" + i).style.display = "inline-block";
    }
}

function jogar(){
    jog = document.getElementById("letra-escolhida");
    jog.focus();
    if(jog.value==""){
        alert("É preciso informa ao menos uma letra!");
    }else{
        if(Jogando){
            var jog;
            var Auxiliar;
            var letraTemporaria;
            var Letra;
            var Busca;
            Letra = jog.value;
            Busca = Palavra.match(Letra);
            Acertou = false;
            while(Busca != null){
                letraTemporaria = Palavra.search(Letra);
                Auxiliar = document.getElementById("letra" + letraTemporaria).value = Letra;
                Palavra = Palavra.replace(Letra, '0');
                Acertos++;
                Busca = Palavra.match(Letra);
                Acertou = true;
            }
            if(!Acertou){
                document.getElementById("letrasDigitadas").innerHTML += Letra.toUpperCase();
                Erros++;
                if(Erros<7){
                    //Desenhos[Erros].style.display = "block";
                    if(Erros==1){document.getElementById("cabeca").src="img/erro1.jpg";}
                if (Erros==2) {document.getElementById("cabeca").src="img/erro2.jpg";}
                if (Erros==3) {document.getElementById("cabeca").src="img/erro3.jpg";}
                if (Erros==4) {document.getElementById("cabeca").src="img/erro4.jpg";}
                if (Erros==5) {document.getElementById("cabeca").src="img/erro5.jpg";}
                if (Erros==6) {document.getElementById("cabeca").src="img/erro6.jpg";}

                }
                


                else{
                    document.getElementById("cabeca").src = "";
                    document.getElementById("msg").innerHTML = "Infelizmente você PERDEU!!";
                    Jogando = false;
                }
            }
            if(Acertos == Tamanho){
                document.getElementById("msg").innerHTML = "";
                document.getElementById("msg").innerHTML = "Parabéns você ACERTOU!!";
                Jogando = false;
            }
        }
    }
}

function inicia(){
    Jogando = true;
    jog = document.getElementById("letra-escolhida");
    jog.value = "";
    jog.focus();
    Acertos = 0;
    Erros = 0;
    Acertou = false;
    document.getElementById("letrasDigitadas").innerHTML = "Letras Digitadas:";
    Posicao=Math.round(Math.random()*Qtd);
    Palavra=listaTimes[Posicao];
    Tamanho=Palavra.length;
    defineLetras(Tamanho);
    document.getElementById("msg").innerHTML = "";
    
    
    //document.getElementById("corpo");
     //dodument.getElementById("corpo").src="img/erro2.jpg";
    // Desenhos[3].document.getElementById("bracoE");
    // dodument.getElementById("bracoE").src="img/erro3.jpg";
    // Desenhos[4].document.getElementById("bracpD");
     //dodument.getElementById("bracpD").src="img/erro4.jpg";
    // Desenhos[5].document.getElementById("pernaE");
   //  dodument.getElementById("pernaE").src="img/erro5.jpg";
    // Desenhos[6].document.getElementById("pernaD");
   //  dodument.getElementById("pernaD").src="img/erro6.jpg";
   // document.getElementById("cabeca").src="";
    //dodument.getElementById("cabeca").src="img/erro7.jpg";
   // for(var i = 1; i < 7; i++){
      //  Desenhos[i].style.display = "none";
    //}
}

function dica(){
    alert(Palavra);
    jog.focus();
}

window.addEventListener("load", inicia);