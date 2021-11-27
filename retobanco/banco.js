var bancoCli = "BanKev";

var hoy = new Date();
var horaTransf = hoy.getHours();
//console.log(horaTransf);

var resultado = document.getElementById("result");

var bancoDes = document.getElementById("BanDes");
var cuentaCli = document.getElementById("CueCli");
var cuentaDes = document.getElementById("CueDes");
var saldoTransf = document.getElementById("ValorT");

var horaHabil = {
      A1: 9,
      C1: 12,
      A2: 15,
      C2: 20
};

var boton = document.getElementById("btn");
boton.addEventListener("click", transaccion)

var saldoCli = 115000;
var saldoDes = 0;
var costoTransf = 0;

var cuentasCli = new Array();
cuentasCli[1]="004001";
cuentasCli[2]="124578";
cuentasCli[3]="256389";
cuentasCli[4]="896547";

var cuentasDes = new Array();
cuentasDes[1]="12345";
cuentasDes[2]="98765";
cuentasDes[3]="25852";
cuentasDes[4]="45654";


function transaccion(){

resultado.innerHTML="";

if (horaTransf >= horaHabil.A1 && horaTransf <= horaHabil.C1 || horaTransf >= horaHabil.A2 && horaTransf <= horaHabil.C2) {

if (cuentaCli.value == ctcli(cuentaCli.value)) {  //cliente existe
  if (cuentaDes.value == ctdes(cuentaDes.value)) { //destino existe

      if (saldoCli > saldoTransf.value) { //saldo suficiente
        resultado.innerHTML+="<strong>Inicio transaccion...</strong><br>";
        resultado.innerHTML+="<br><strong>De : </strong>" + bancoCli + " <br><strong>Para : </strong>" + bancoDes.value;
        resultado.innerHTML+="<br><strong>Cuenta remitente : </strong>" + cuentaCli.value + " <br><strong>Cuenta destino : </strong>" + cuentaDes.value + "<br>";

            if (bancoDes.value == bancoCli) { //costo transaccion
                costoTransf = 0;
              resultado.innerHTML+="<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD";
                saldoDes += saldoTransf.value;
                saldoCli+= -saldoTransf.value - costoTransf;

              resultado.innerHTML+="<br><strong>Saldo transferido : </strong>$" + saldoTransf.value + " USD";
              resultado.innerHTML+="<br><strong>Costo transacicon : </strong>$" + costoTransf + " USD";
              resultado.innerHTML+="<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>";

            }
            else {

                costoTransf = 100;
                  if (saldoCli - costoTransf < saldoTransf.value) {
                    resultado.innerHTML+="<br>El saldo no cubre el costo de transaccion<br>";
                  }
                  else {
                    resultado.innerHTML+="<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD";
                    saldoDes += saldoTransf.value;
                    saldoCli+= -saldoTransf.value - costoTransf;

                    resultado.innerHTML+="<br><strong>Saldo transferido : </strong>$" + saldoTransf.value + " USD";
                    resultado.innerHTML+="<br><strong>Costo transacicon : </strong>$"+ costoTransf + " USD";
                    resultado.innerHTML+="<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>";
                  }
            }

          resultado.innerHTML+="<br><strong>...Transaccion Finalizada!</strong>";
      }//fin if compara saldo
      else {
        resultado.innerHTML="El saldo del cliente no es suficiente";

      }

  }//fin if compara cuentas destino

  else {
  resultado.innerHTML="No existe esa cuenta";
  }


}//fin if compara cuentas clientes
  else {
  resultado.innerHTML="No esta registrada esa cuenta cliente";
}

}//fin if horario
else {
  resultado.innerHTML="No es posible realizar por fuera de horario";
}

bancoDes.value="";
cuentaCli.value="";
cuentaDes.value="";
saldoTransf.value="";
bancoDes.focus();

}//fin function


function ctcli(cc){
  for (var i = 1; i < cuentasCli.length; i++) {
  if (cc == cuentasCli[i]){
      cc = cuentasCli[i];
      return cc;
    }
  }
}

function ctdes(cd){
  for (var l = 1; l < cuentasDes.length; l++) {
    if (cd == cuentasDes[l]){
        cd = cuentasDes[l];
        return cd;
    }
  }
}
