var assert = require("assert");
var Cuenta = require("../src/cuenta");

describe("Cuenta", function() {
  it("depositar incrementa el monto", function(done) {
    var cuenta = new Cuenta(100);
    cuenta.depositar(20, function(){
      cuenta.monto(function(monto){
        assert.equal(monto, 120);
        done();
      });
    });
  })
  it("extraer decrementa el monto", function(done) {
    var cuenta = new Cuenta(100);
    cuenta.extraer(20, function() {
      cuenta.monto(function(monto){
        assert.equal(monto, 80);
        done();
      });
    });
  })
})