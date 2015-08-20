var assert = require("assert");
var Cuenta = require("../src/cuenta");

describe("Cuenta", function() {
  it("depositar incrementa el monto", function() {
    var cuenta = new Cuenta(100);
    cuenta.depositar(20);
    assert.equal(cuenta.monto, 120);
  })
  it("extraer decrementa el monto", function() {
    var cuenta = new Cuenta(100);
    cuenta.extraer(20);
    assert.equal(cuenta.monto, 80);
  })
})