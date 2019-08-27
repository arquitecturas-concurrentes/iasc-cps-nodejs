function Transferencia(origen, destino, monto) {
  this.origen = origen;
  this.destino = destino;
  this.monto = monto;
}

Transferencia.prototype = {
    ejecutar: function (cont) {
        var self = this;
        self.origen.extraerSiPuede(self.monto, function () {
            console.log("Depositando " + self.monto + " de " + self.origen._monto + " hacia " + self.destino._monto);
            self.destino.depositar(self.monto, cont);
        }, function () {
            cont();
        });
    }
}

module.exports = Transferencia;


