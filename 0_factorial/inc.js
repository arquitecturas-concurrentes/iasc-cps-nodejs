/*Funcion sucesor*/
function succ(n) {
    return n +1;
}

function inv(x) {
    return 1/x;
};

function succ_cont(x, cont) {
   cont(succ(x));
};

succ_cont(2, (y) => {console.log(y) } );
