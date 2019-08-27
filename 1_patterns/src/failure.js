function siguiente(x, cont) {
    cont(x + 1);
}


function duplicar(x, cont) {
    cont(x * 2);
}

function inversa(x, cont) {
    if (x !== 0) {
        cont(1 / x);
    }
}

var cuentaLoca = function(x, cont) {
    siguiente(x, function(y){
        inversa(y, function(z){
            duplicar(z, cont);
        })
    })
};

















// function componer(f, g) {
//     return function(x, cont) {
//         g(x, function(y){
//             f(y, cont);
//         })
//     }
// }

// function pipeline(fs) {
//     return fs.reduce(componer);
// }