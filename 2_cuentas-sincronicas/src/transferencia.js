function Transferencia(origen, destino, monto) {
  this.origen = origen;
  this.destino = destino;
  this.monto = monto;
}

Transferencia.prototype = {
  ejecutar: function() {
    if (this.origen.puedeExtraer(this.monto)) {
      this.origen.extraer(this.monto);
      this.destino.depositar(this.monto);
    }
  }
};

module.exports = Transferencia;