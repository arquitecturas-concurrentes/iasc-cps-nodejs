function fact(n) {
    if (n == 0)
        return 1;
    else
        return n * fact(n - 1);
}

//With CPS

function fact_cont(n, ret) {
    if (n == 0)
        ret(1);
    else
        fact_cont(n - 1, function (t0) {
            ret(n * t0)
        });
}

console.log(fact(34));

console.log(fact_cont(34, function(x) {}));