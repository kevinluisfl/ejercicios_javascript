class Billete{
  constructor(v, c){
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}

var aux1 = 0;
var saldo = 0;

var imagenes = [];
imagenes[100000] = "img/100mil.png";
imagenes[50000] = "img/50mil.png";
imagenes[20000] = "img/20mil.png";
imagenes[10000] = "img/10mil.png";
imagenes[5000] = "img/5mil.png";
imagenes[2000] = "img/2mil.png";
imagenes[1000] = "img/1mil.png";

var caja = [];
caja.push(new Billete(100000, 10));
caja.push(new Billete(50000, 10));
caja.push(new Billete(20000, 10));
caja.push(new Billete(10000, 50));
caja.push(new Billete(5000, 100));
caja.push(new Billete(2000, 100));
caja.push(new Billete(1000, 100));

var entregado = [];
entregado.push(new Billete(100000, 0));
entregado.push(new Billete(50000, 0));
entregado.push(new Billete(20000, 0));
entregado.push(new Billete(10000, 0));
entregado.push(new Billete(5000, 0));
entregado.push(new Billete(2000, 0));
entregado.push(new Billete(1000, 0));

var retirado = [];
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
