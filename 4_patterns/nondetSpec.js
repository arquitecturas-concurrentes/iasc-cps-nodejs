var assert = require("assert");

describe("no determinsmo con continuaciones", function(){
  
  it("un solo resultado", function() { 
    var resultados = findall(function(cont) {
      progenitoresComunes("pedro", "maria", cont)
    });
    assert.deepEqual(resultados, ["ana"]);
  })

  it("multiples resultados", function() { 
    var resultados = findall(function(cont) {
      progenitoresComunes("estela", "maria", cont)
    });
    assert.deepEqual(resultados, ["ana", "mario"]);
  })

  it("ningun resultado", function() { 
    var resultados = findall(function(cont) {
      progenitoresComunes("rodolfo", "maria", cont)
    });
    assert.deepEqual(resultados, []);
  })
})

function progenitor(x, cont) {
  if (x === "pedro") {
    cont("ana");
    cont("ernesto");
  } else if (x === "maria") {
    cont("ana");
    cont("mario");
  } else if (x === "estela") {
    cont("ana");
    cont("mario");
  } 
}

function progenitoresComunes(x, y, cont) {
  progenitor(x, function(p1){
    progenitor(y, function(p2){
      if(p1 === p2) cont(p1);
    });
  });
}


function findall(query) {
  var results = [];
  query(function(result){
    results.push(result);
  });
  return results;
}