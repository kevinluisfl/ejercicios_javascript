var bancoCli = "Davivienda";
var bancoDes = "BBVA";
var cuentaCli = "000400012";
var cuentaDes = "123456789";
var saldoCli = 1100;
var saldoDes = 0;
var horaTransf = 16;
var saldoTransf = 1000;
var costoTransf = 0;

//aqui va estar un for recorriendo las cuentas registradas en un arrya
//igual para la cuenta destino
if (horaTransf >= 9 && horaTransf <= 12 || horaTransf >= 15 && horaTransf <= 20) {


if (cuentaCli == "000400012") {  //cliente existe
  if (cuentaDes == "123456789") { //destino existe

      if (saldoCli > saldoTransf) { //saldo suficiente
        document.write("Inicio transaccion...<br>");
        document.write("<br>De : " + bancoCli + " <br>Para : " + bancoDes);
        document.write("<br>Cuenta remitente : " + cuentaCli + " <br>Cuenta destino : " + cuentaDes + "<br>");

            if (bancoDes == bancoCli) { //costo transaccion
              costoTransf = 0;
            document.write("<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD");
              saldoDes += saldoTransf;
              saldoCli+= -saldoTransf - costoTransf;

            document.write("<br><strong>Saldo transferido : </strong>$" + saldoTransf + " USD");
            document.write("<br><strong>Costo transacicon : </strong>$" + costoTransf + " USD");
            document.write("<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>");

            }else {
              costoTransf = 100;
                if (saldoCli - costoTransf < saldoTransf) {
                  document.write("<br>El saldo no cubre el costo de transaccion<br>");
                }else {
                  document.write("<br><strong>Saldo en la cuenta : </strong>$" + saldoCli + " USD");
                  saldoDes += saldoTransf;
                  saldoCli+= -saldoTransf - costoTransf;

                  document.write("<br><strong>Saldo transferido : </strong>$" + saldoTransf + " USD");
                  document.write("<br><strong>Costo transacicon : </strong>$"+ costoTransf + " USD");
                  document.write("<br><strong>Nuevo saldo Cuenta : </strong>$" + saldoCli + " USD <br>");
                }
            }

          document.write("<br>...Transaccion Finalizada!");
      }else {
        document.write("El saldo del cliente no es suficiente");

      }

  }
  else {
  document.write("No existe esa cuenta");
  }
}
else {
  document.write("No esta registrada esa cuenta cliente");
}
}
else {
  document.write("No es posible realizar por fuera de horario");
}
