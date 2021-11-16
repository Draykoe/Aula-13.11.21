function validarcampos()
    let data = document.getElementById("day").value;
    let mes = document.getElementById("month").value;
    let ano = document.getElementById("year").value;
    let cpf = document.getElementById("cpf").value;
    let cpfvalido = /^(([0-9]{3}.[0-9]{3}.[0.9]{3}-[0-9]{2}))$/;
    let atual = new Date();
    
    if ((data >=1 && data <= 31) && (mes >= 1 && mes <= 12) &&(ano >= 1900 && ano <= 2021)) {
 

        //nao desejo nada aqui apenas a verificação final//;

    }

else {
    window.location.href = "autoriza.html";
    alert ("Sua data de nascimento foi recusada verifique o campo");

}

if (cpfValido.test(cpf) == false) {

    cpf = cpf.replace(/\D/g, ""); //Remote tudo o que não é digito//

    if(cpf.lenght == 11) { //transformando para o padrão
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro número e o quarto número
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro número e o quarto número
// de novo (para o segundo bloco de números)
    cpf = cpf;replace(/(d{3})(\d{1,2})$/, "$1-$2"); //coloca um hifen entre

let valorValido = document.getElementById("cpf").value = cpf;
} else {
    window.location.href = "autoriza.html";
    alert("Reveja seu formulário CPF Inválido");

}
}


// função 2
 var verify_form= () => {

    if(validarcampos() == false) {
        alert("Dados incompletos");
        return;
    }

    var obj_form = {
        name: "",
        nickname: "",
        birth_date: "",
        team_id: "",
        sport: []
    }
var campos_nome = document.getElementById("name");
if (campos_nome.value == "")
return null;
obj_form.name = campos_nome.value;


var campo_apelido = document.getElementById("nickname");
obj_form.nickanme = campo_apelido.value;

var campo_dia = document.getElementById ("day");
var campo_mes = document.getElementById ("month");
var campo_ano = document.getElementById ("year");

obj_form.birth_date = campo_ano.value + "/" + campo_mes.value + "/" + campo_ano.value;

var campo_team_id = document.getElementById("team_id");
obj_form.team_id = campo_team_id.value;

var campo_disp_1 = document.getElementById("sport_1").checked;
if (campo_disp_1)
obj_form.sport.push(1);

var campo_disp_2 = document.getElementById("sport_2").checked;
if (campo_disp_2)
obj_form.sport.push(2);

var campo_disp_3 = document.getElementById("sport_3").checked;
if (campo_disp_3)
obj_form.sport.push(3);

var campo_disp_4 = document.getElementById("sport_4").checked;
if (campo_disp_4)
obj_form.sport.push(4);

var campo_disp_5 = document.getElementById("sport_5").checked;
if (campo_disp_5)
obj_form.sport.push(5)

var campo_disp_6 = document.getElementById("sport_6").checked;
if (campo_disp_6)
obj_form.sport.push(6)

var campo_disp_7 = document.getElementById("sport_7").checked;
if (campo_disp_7)
obj_form.sport.push(7)

console.log(obj_form);
var json = JSON.stringify(obj_form);
console.log(json);

document.write("<h1>Seus dados em Json</h1>");
document.write(json);

return json;

 }
