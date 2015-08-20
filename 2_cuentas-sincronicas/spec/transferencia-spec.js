var assert = require("assert");

var Transferencia = require("../src/transferencia");
var Cuenta = require("../src/cuenta");

describe("Transferencia", function() {
  it("incrementa el destino y decrementa el origen", function() {
    var origen = new Cuenta(100);
    var destino = new Cuenta(100);

    [ new Transferencia(origen, destino, 30),
      new Transferencia(origen, destino, 40),
      new Transferencia(origen, destino, 10),
      new Transferencia(origen, destino, 50),
      new Transferencia(destino, origen, 10),
      new Transferencia(destino, origen, 20)].forEach(function(it){
        it.ejecutar();
      });

    assert.equal(origen.monto, 50);
    assert.equal(destino.monto, 150);
  }) 
});