function Cuenta(monto) {
  this._monto = monto;
}

Cuenta.prototype = {
  puedeExtraer: function(_monto) {
    return this._monto >= _monto
  },
  extraer: function(_monto) {
    this._monto -= _monto;
  },
  depositar: function(_monto) {
    this._monto += _monto;
  },
  get monto() {
    return this._monto;
  }
}

module.exports = Cuenta;
