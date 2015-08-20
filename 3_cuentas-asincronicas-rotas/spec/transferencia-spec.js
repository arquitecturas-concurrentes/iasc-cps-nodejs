var assert = require("assert");

var Transferencia = require("../src/transferencia");
var Cuenta = require("../src/cuenta");

describe("Transferencia", function() {
  it("incrementa el destino y decrementa el origen", function(done) {
    var origen = new Cuenta(100);
    var destino = new Cuenta(100);

    var i = 6;

    [ new Transferencia(origen, destino, 30),
      new Transferencia(origen, destino, 40),
      new Transferencia(origen, destino, 10),
      new Transferencia(origen, destino, 50),
      new Transferencia(destino, origen, 10),
      new Transferencia(destino, origen, 20)].forEach(function(it){
        it.ejecutar(function(){
          i--;
          if (i == 0) {
            origen.monto(function(monto){
              assert.equal(monto, 50);
              destino.monto(function(monto){
                assert.equal(monto, 150);
                done();
              });  
            });                    
          }
        });
      });
  }) 
});