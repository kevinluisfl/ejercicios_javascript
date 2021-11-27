
function entregarDinero(){

  resultado.innerHTML = "";
  retiros.innerHTML = "";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

    if(dinero > saldoCaja()){
      resultado.innerHTML = "<strong>No es posible sacar esa cantidad $" + dinero + " , supera el saldo disponible</strong><br><hr> ";
    }
    else {
      var val = 0;
      var cant = 0;
      var i = 0;

      retirado.splice(0);
    for(var bi of caja){
      if (dinero > 0){
        div = Math.floor(dinero/bi.valor);

        if (div > bi.cantidad) {
            papeles = bi.cantidad;
        }
        else {
        papeles = div;
        }

        retirado.push(new Billete(bi.valor, papeles));//para solo mostrar retiro reciente

          for (var en of entregado){
            if (bi.valor == en.valor){
              entregado.splice(i,1,new Billete(bi.valor,en.cantidad + papeles));
            }
          }
      dinero = dinero - (bi.valor * papeles);
      val = bi.valor;
      cant = bi.cantidad - papeles;
      caja.splice(i,1,new Billete(val, cant));
      i += 1;
      }
    }
      for (var r of retirado){
        if(r.cantidad > 0){
          //document.body.appendChild(r.imagen);
        resultado.innerHTML += "<br>" + r.cantidad + " billete de $" + r.valor + "<br>";
            for (var l=1; l<=r.cantidad;l++){
              resultado.appendChild(r.imagen);//de esta forma traidod e platzi
              resultado.innerHTML+= " ";
                  }
        }
      }
      resultado.innerHTML += "<br>...Fin transacción... <br><hr>";
      saldito.innerHTML = "<strong>Saldo disponible para retiro : $" + saldoCaja() + "</strong><hr>";

    }
    t.value = ""; //traido de la ayuda platzi
}

function saldoEntregado(){
  saldo = 0;
  for (var e of entregado){
    aux1 = e.valor * e.cantidad;
    saldo = saldo + aux1;
  }
  return saldo;
}

function saldoCaja(){
  saldo = 0;
  for (var c of caja){
    aux1 = c.valor * c.cantidad;
    saldo = saldo + aux1;
  }
  return saldo;
}

function mostrarSaldo(){
    saldito.innerHTML = "<strong>Saldo disponible para retiro : $" + saldoCaja() + "</strong> <hr>";
}

function historico(){
    resultado.innerHTML="";
    retiros.innerHTML = "<strong>Cantidad retirada : $" + saldoEntregado() + "</strong><hr>";
  for (var ri of entregado){
    if(ri.cantidad > 0){
      //document.body.appendChild(r.imagen);
    resultado.innerHTML += "<br>" + ri.cantidad + " billete de $" + ri.valor + "<br>";
    for (var l=1; l<=ri.cantidad;l++){
      resultado.appendChild(ri.imagen);//de esta forma traidod e platzi
      resultado.innerHTML+= " ";
          }

    }
  }
}
