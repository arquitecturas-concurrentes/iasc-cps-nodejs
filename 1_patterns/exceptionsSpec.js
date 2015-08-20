var assert = require("assert");

describe("excepciones", function () {

  //(2 / (x + 1))
  var cuentaLoca = function (x, cont) { 
    siguiente(x, cont.onOk(function (y) {
      inversa(y, cont.onOk(function (z) {
        duplicar(z, cont);
      }))
    }))
  };

  it("no falla", function (done) {
    cuentaLoca(1, newCont(function (x) {
      assert.equal(x, 1)
      done();
    }, function () {
      assert.fail();
    }))
  })

   it("falla", function (done) {
    cuentaLoca(-1, newCont(function (x) {
      assert.fail();
    }, function (msg) {
      assert.equal(msg, "division por cero")
      done();
    }))
  })
  //var cuentaLoca = pipeline([duplicar, inversa, siguiente]);
})
 
function newCont(ok, err) {
  return {
    ok: ok, 
    err: err, 
    onOk: function (ok) { return newCont(ok, err) }
  };
}       

function siguiente(x, cont) {
  cont.ok(x + 1);
} 

function duplicar(x, cont) {
  cont.ok(x * 2);
} 

function inversa(x, cont) {
  if (x !== 0) {
    cont.ok(1/x);
  } else {
    cont.err("division por cero");
  }
} 