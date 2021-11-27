class Billete{

  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }

}

var aux1 = 0;
var saldo = 0;

function entregarDinero(){

  resultado.innerHTML = "";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

    if(dinero > saldoCaja()){
      resultado.innerHTML = "<strong>No es posible sacar esa cantidad $" + dinero + " , supera el saldo disponible</strong><br><hr>";
    }
    else {
////////////////////////////////////////
  var val = 0;
  var cant = 0;
  var i = 0;

      retirado.splice(0); //para solo mostrar retiro reciente

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
    /////////////////////////////////////////
      for (var r of retirado){  //noramlmente va entregado
        if(r.cantidad > 0){
          //lo mismo de abajo más simplificado
          //resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>";
          //document.body.appendChild(r.imagen);// imprime fuera de resultado
        resultado.innerHTML += "<br>" + r.cantidad + " billete de $" + r.valor + "<br>";
        for (var l=1; l<=r.cantidad;l++){
          resultado.appendChild(r.imagen);//de esta forma traidod e platzi
          resultado.innerHTML+= " ";
              }
        }
      }
      resultado.innerHTML += "...Fin transacción... <br><hr>";
      saldito.innerHTML = "<strong>Saldo disponible : $" + saldoCaja() + "</strong><hr>";
    }
    t.value = "";
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
    saldito.innerHTML = "<strong>Saldo disponible : $" + saldoCaja() + "</strong><hr>";
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

var imagenes = [];
imagenes[100] = "100mil.png";
imagenes[50] = "50mil.png";
imagenes[20] = "20mil.png";
imagenes[10] = "10mil.png";
imagenes[5] = "5mil.png";
imagenes[2] = "2mil.png";
imagenes[1] = "1mil.png";

var caja = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));
caja.push(new Billete(2, 10));
caja.push(new Billete(1, 10));

var entregado = [];
entregado.push(new Billete(100, 0));
entregado.push(new Billete(50, 0));
entregado.push(new Billete(20, 0));
entregado.push(new Billete(10, 0));
entregado.push(new Billete(5, 0));
entregado.push(new Billete(2, 0));
entregado.push(new Billete(1, 0));

var retirado = []; //para guardar el ultimo retiro, no todos
                  //era lo mismo que entregado, pero entregado
                //lo uso para el control del saldo
var dinero = 0;
var div = 0;
var papeles = 0;

var saldito = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var retiros = document.getElementById("retirado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var dis = document.getElementById("disponible");
dis.addEventListener("click", mostrarSaldo);

var his = document.getElementById("histori");
his.addEventListener("click", historico);
