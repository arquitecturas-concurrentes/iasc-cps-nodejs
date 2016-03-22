function doLater(action) {
    //action();
    //setTimeout(action, 0);
    setTimeout(action, Math.random() * 500);
}

function Cuenta(monto) {
    this._monto = monto;
}

Cuenta.prototype = {
    puedeExtraer: function (_monto, cont) {
        var self = this;
        doLater(function () {
            cont(self._monto >= _monto);
        });
    },
    extraerSiPuede: function (_monto, trueCont, falseCont) {
        var self = this;
        doLater(function () {
            //if(self._monto < _monto) throw new Error("ups")
            if (self._monto >= _monto) {
                self._monto -= _monto;
                trueCont();
            } else {
                falseCont()
            }
        });
    },
    extraer: function (_monto, cont) {
        var self = this;
        doLater(function () {
            self._monto -= _monto;
            cont()
        });
    },
    depositar: function (_monto, cont) {
        var self = this;
        doLater(function () {
            self._monto += _monto;
            cont()
        });
    },
    monto: function (cont) {
        var self = this;
        doLater(function () {
            cont(self._monto);
        });
    }
}

module.exports = Cuenta;

