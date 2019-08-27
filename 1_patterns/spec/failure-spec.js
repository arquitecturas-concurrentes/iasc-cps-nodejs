var assert = require("assert");

describe("falla", function(){

  //(2 / (x + 1))
  var cuentaLoca = function(x, err, cont) {
    siguiente(x, function() {
      //
    }, function(y){
      inversa(y, function() {
        //imprimir el error
          console.log();
      }, function(z){
        duplicar(z, err, cont);
      })
    })
  };

  it("no falla", function(done){
    cuentaLoca(1, function(x){
      assert.equal(x, 1);
      done();
    })
  });


    it("falla", function(done){
    cuentaLoca(-1, function(x){
      assert.fail();
    });
    done();
  })

    var cuentaLoca = pipeline([duplicar, inversa, siguiente]);
});
        

function componer(f, g) {
  return function(x, cont) {
    g(x, function(y){
      f(y, cont);
    })
  }
}


function pipeline(fs) {
  return fs.reduce(componer);
}


function siguiente(x, cont) {
  cont(x + 1);
}


function duplicar(x, cont) {
  cont(x * 2);
}

function inversa(x, fail ,  cont) {
  if (x !== 0) {
    cont(1/x);
  }
}