var bancoCli = "BanKev";

var hoy = new Date();
var horaTransf = hoy.getHours() +''+ hoy.getMinutes();
//console.log(horaTransf);

var resultado = document.getElementById("result");

var bancoDes = document.getElementById("BanDes");
var cuentaCli = document.getElementById("CueCli");
var cuentaDes = document.getElementById("CueDes");
var saldoTransf = document.getElementById("ValorT");

var horaHabil = {
      A1: 900,
      C1: 1200,
      A2: 1500,
      C2: 2000
};

var boton = document.getElementById("btn");
boton.addEventListener("click", transaccion)

var saldoCli = 115000;
var saldoDes = 0;
var costoTransf = 0;

var cuentasCli = new Array();
cuentasCli[1]="0040012";
cuentasCli[2]="124578";
cuentasCli[3]="256389";
cuentasCli[4]="896547";

var cuentasDes = new Array();
cuentasDes[1]="12345";
cuentasDes[2]="98765";
cuentasDes[3]="25852";
cuentasDes[4]="45654";


function transaccion(){

if (horaTransf >= horaHabil.A1 && horaTransf <= horaHabil.C1 || horaTransf >= horaHabil.A2 && horaTransf <= horaHabil.C2) {

for (var i = 1; i < cuentasCli.length; i++) {
if (cuentaCli == cuentasCli[i]){
  cuentaCli = cuentasCli[i];
}
}

for (var l = 1; l < cuentasDes.length; l++) {
  if (cuentaDes == cuentasDes[l]){
    cuentaDes = cuentasDes[l];
  }
}

///debi hacer un if con ambos y un &&
if (cuentaCli) {  //cliente existe
  if (cuentaDes) { //destino existe

      if (saldoCli > saldoTransf.value) { //saldo suficiente
        document.write("<strong>Inicio transaccion...</strong><br>");
        document.write("<br><strong>De : </strong>" + bancoCli + " <br><strong>Para : </strong>" + bancoDes.value);
        document.write("<br><strong>Cuenta remitente : </strong>" + cuentaCli.value + " <br><strong>Cuenta destino : </strong>" + cuentaDes.value + "<br>");

            if (bancoDes.value == bancoCli.value) { //costo transaccion
                costoTransf = 0;
              document.write("<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD");
                saldoDes += saldoTransf.value;
                saldoCli+= -saldoTransf.value - costoTransf;

              document.write("<br><strong>Saldo transferido : </strong>$" + saldoTransf.value + " USD");
              document.write("<br><strong>Costo transacicon : </strong>$" + costoTransf + " USD");
              document.write("<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>");

            }
            else {

                costoTransf = 100;
                  if (saldoCli - costoTransf < saldoTransf.value) {
                    document.write("<br>El saldo no cubre el costo de transaccion<br>");
                  }
                  else {
                    document.write("<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD");
                    saldoDes += saldoTransf.value;
                    saldoCli+= -saldoTransf.value - costoTransf;

                    document.write("<br><strong>Saldo transferido : </strong>$" + saldoTransf.value + " USD");
                    document.write("<br><strong>Costo transacicon : </strong>$"+ costoTransf + " USD");
                    document.write("<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>");
                  }
            }

          document.write("<br><strong>...Transaccion Finalizada!</strong>");
      }//fin if compara saldo
      else {
        document.write("El saldo del cliente no es suficiente");

      }

  }//fin if compara cuentas destino

  else {
  document.write("No existe esa cuenta");
  }


}//fin if compara cuentas clientes
  else {
  document.write("No esta registrada esa cuenta cliente");
}

}//fin if horario
else {
  document.write("No es posible realizar por fuera de horario");
}

}//fin funcion
