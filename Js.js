function Cadastro(){
    if(verificacaoCPF() !== "válido"){
        alert("CPF Inválido!");
    }
    
    else{
        let DadosCorretor = $('#form').serialize();
        var resposta = document.querySelector('.resultado');
        $.ajax({
            method: 'GET',
            url:    'Controle.php?Enviar',
            data:   DadosCorretor,
        
            beforeSend: function(){
                resposta.classList.add("ativo");
                $("#resultado").html("Enviando dados...");
                
            }

            
        }) 
        
        .done(function(dadosPHP){
            resposta.classList.add("ativop");
            $("#resultado").html(dadosPHP);
            
        
            if(dadosPHP = "Cadastro realizado com sucesso!"){
                setTimeout(function(){
                window.location.replace("http://localhost/Teste Prático de programação/Index.html");
            }, 1500);
            }
        
            
        })
        
        .fail(function(){
            resposta.classList.add("ativon");
            $("#resultado").html("Falha na matrícula");
              
        })
    }
}

//Exibição

$.ajax({
    url: 'Controle.php?Exibir',

        beforeSend: function(){
            $("#exibicao").html("Buscando solicitações...");
        }
    })

    .done(function(dadosPHP){
        let Dados = JSON.parse(dadosPHP);
        
        var bloco = '';
        for(i = 0; i < Dados.length; i++ ){
            bloco += "<div class='tabela'>";
            bloco += "<b>ID:</b> " + Dados[i].ID + "<br>";
            bloco += "<b>CPF:</b> " + Dados[i].CPF + "<br>";
            bloco += "<b>Creci:</b> " + Dados[i].Creci + "<br>";
            bloco += "<b>Nome:</b> " + Dados[i].Nome + "<br>";
            bloco += "</div>";
            bloco += "<div class='tabela'>";
            bloco += '<input type="button" class="botao-div" name="Editar" id="Editar" value="Editar" onclick="Editar()"><br>';
            bloco += '<input type="button" class="botao-div" name="Deletar" id="Deletar" value="Excluir" onclick="Deletar()">' + "<br>";
            bloco += "</div>";
            
        }  

        $("#exibicao").html(bloco);
    })

    .fail(function(){
        $("#exibicao").html("Falha na Exibição");
    })

//Editar dados

   
function Editar(){
    var cpf = document.querySelector(".cpf");
    var creci = document.querySelector(".creci");
    var Salvar = document.querySelector(".Salvar");
    var Excluir = document.querySelector(".Excluir");
    var Id = document.querySelector(".id");
    var Enviar = document.querySelector(".Enviar");
    var Nome = document.querySelector(".nome");


    cpf.classList.add("desativado");
    creci.classList.add("desativado");
    Enviar.classList.add("desativado");
    Salvar.classList.add("ativo");
    Id.classList.add("ativo");
    Excluir.classList.remove("ativo");
    Nome.classList.remove("desativado");
}

function Atualizar(){
    let ID = document.querySelector("#id").value;
    let Nome = document.querySelector("#nome").value;
        var resposta = document.querySelector('.resultado');

        
        $.ajax({
            method: 'GET',
            url:    'Controle.php?Atualizar' ,
            data:  {"id_corretores": ID,
                    "nome_corretores": Nome
            },
        
            beforeSend: function(){
                resposta.classList.add("ativo");
                $("#resultado").html("Enviando dados...");
                
            }  
        }) 
        
        .done(function(dadosPHP){
            resposta.classList.add("ativop");
            $("#resultado").html(dadosPHP);
        
            if(dadosPHP = "Atualizado com sucesso!"){
                setTimeout(function(){
                    window.location.replace("http://localhost/Teste Prático de programação/Index.html");
            }, 800);
            }
        })
        
        .fail(function(){
            resposta.classList.add("ativon");
            $("#resultado").html("Falha na atualização");
              
        })
}
 
//Exclusão

function Deletar(){
    var cpf = document.querySelector(".cpf");
    var creci = document.querySelector(".creci");
    var Salvar = document.querySelector(".Salvar");
    var Excluir = document.querySelector(".Excluir");
    var Id = document.querySelector(".id");
    var Enviar = document.querySelector(".Enviar");
    var Nome = document.querySelector(".nome");


    cpf.classList.add("desativado");
    creci.classList.add("desativado");
    Enviar.classList.add("desativado");
    Salvar.classList.remove("ativo");
    Nome.classList.add("desativado");
    Excluir.classList.add("ativo");
    Id.classList.add("ativo");
}

function FExcluir(){

    let ID = document.querySelector("#id").value;
        var resposta = document.querySelector('.resultado');

        console.log(ID );
        $.ajax({
            method: 'GET',
            url:    'Controle.php?Excluir',
            data:   {"id_corretores": ID},
        
            beforeSend: function(){
                resposta.classList.add("ativo");
                $("#resultado").html("Enviando dados...");
                
            }  
        }) 
        
        .done(function(dadosPHP){
            resposta.classList.add("ativop");
            $("#resultado").html(dadosPHP);
            
        
            if(dadosPHP = "Excluido com sucesso!"){
                setTimeout(function(){
                    window.location.replace("http://localhost/Teste Prático de programação/Index.html");
            }, 800);
            }
        })
        
        .fail(function(){
            resposta.classList.add("ativon");
            $("#resultado").html("Falha na exclusão");
              
        })
}

//Verificação de quantidade e números
var cpf = document.querySelector('#cpf'); 
var spamCpf = document.querySelector('#spamCpf');

cpf.addEventListener('focusout', async () => {
    try{
        const apenasNumero = /^[0-9]+$/; //Regex
        const cpfValido = /^[0-9]{11}$/;

    if(!apenasNumero.test(cpf.value) || !cpfValido.test(cpf.value)){
        throw{cpf_error:'CPF inválido!'};
    }

    }

    catch(error){
        if(error?.cpf_error){
            spamCpf.textContent = 'CPF inválido!';
            setTimeout(() => {
                spamCpf.textContent = '';
            }, 8000);
        }
    }
})

// Validação quantidade Creci
var creci = document.querySelector("#creci");
var spamCpf = document.querySelector('#spamCreci');

creci.addEventListener('focusout', async () => {
    try{
        const apenasNumero = /^[0-9]+$/; //Regex
        const creciValido = /^[0-9]{2,}$/;

    if(!apenasNumero.test(creci.value) || !creciValido.test(creci.value)){
        throw{creci_error:'Creci inválido!'};
    }

    }

    catch(error){
        if(error?.creci_error){
            spamCreci.textContent = 'Creci inválido!';
            setTimeout(() => {
                spamCreci.textContent = '';
            }, 8000);
        }
    }
})

// Validação quantidade Nome
var nome = document.querySelector("#nome");
var spamNome = document.querySelector('#spamNome');

nome.addEventListener('focusout', async () => {
    try{
        const apenasLetras = /[a-zA-ZÀ-ú\s]{2,}$/; //Regex

    if(!apenasLetras.test(nome.value) ){
        throw{nome_error:'Nome inválido'};
    }

    }

    catch(error){
        if(error?.nome_error){
            spamNome.textContent = 'Nome inválido!';
            setTimeout(() => {
                spamNome.textContent = '';
            }, 8000);
        }
    }
})

//Validação de CPF
function verificacaoCPF(){
    
      
    let myFunc = num => Number(num);
  
    var CpfArray = Array.from(String(cpf.value), myFunc);

    v1_1 = CpfArray[0] * 10;// Parte 1
    v1_2 = CpfArray[1] * 9;
    v1_3 = CpfArray[2] * 8;
    v1_4 = CpfArray[3] * 7;
    v1_5 = CpfArray[4] * 6;
    v1_6 = CpfArray[5] * 5;
    v1_7 = CpfArray[6] * 4;
    v1_8 = CpfArray[7] * 3;
    v1_9 = CpfArray[8] * 2;

    console.log(CpfArray);

   var soma1  = v1_1+v1_2+v1_3+v1_4+v1_5+v1_6+v1_7+v1_8+v1_9;
   var resto1 = soma1 % 11;
   var digito_verificador1 = 11 - resto1;

   if(digito_verificador1 >= 10){
    digito_verificador1 = 0;
   }
   else{
    digito_verificador1 = 11 - resto1;;
   }

   if(digito_verificador1 == CpfArray[9]){//Parte 2 
    v2_1 = CpfArray[0] * 11;
    v2_2 = CpfArray[1] * 10;
    v2_3 = CpfArray[2] * 9;
    v2_4 = CpfArray[3] * 8;
    v2_5 = CpfArray[4] * 7;
    v2_6 = CpfArray[5] * 6;
    v2_7 = CpfArray[6] * 5;
    v2_8 = CpfArray[7] * 4;
    v2_9 = CpfArray[8] * 3;
    v2_10 = CpfArray[9] * 2;

    var soma2  = v2_1+v2_2+v2_3+v2_4+v2_5+v2_6+v2_7+v2_8+v2_9+v2_10;
    var resto2 = soma2 % 11;
    var digito_verificador2 = 11 - resto2;

    if(digito_verificador2 >= 10){
        digito_verificador2 = 0;
       }
       else{
        digito_verificador2 = 11 - resto2;;
       }
   }
   else{
    var verificacao = 'inválido!';
   }

   if(digito_verificador2 == CpfArray[10]){
    verificacao = 'válido';
   }
   else{
    verificacao = 'inválido'
   }

   return(verificacao);
}