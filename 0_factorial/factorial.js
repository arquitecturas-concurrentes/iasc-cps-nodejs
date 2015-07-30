function fact(n) {
    if (n == 0)
        return 1;
    else
        return n * fact(n - 1);
}

//With CPS

function fact(n, ret) {
    if (n == 0)
        ret(1);
    else
        fact(n - 1, function (t0) {
            ret(n * t0)
        });
}