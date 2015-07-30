function fact(n) {
    return tail_fact(n, 1);
}

function tail_fact(n, a) {
    if (n == 0)
        return a;
    else
        return tail_fact(n - 1, n * a);
}

//In CPS

function fact(n, ret) {
    tail_fact(n, 1, ret);
}

function tail_fact(n, a, ret) {
    if (n == 0)
        ret(a);
    else
        tail_fact(n - 1, n * a, ret);
}