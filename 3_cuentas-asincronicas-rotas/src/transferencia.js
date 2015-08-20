function Transferencia(origen, destino, monto) {
  this.origen = origen;
  this.destino = destino;
  this.monto = monto;
}

Transferencia.prototype = {
  ejecutar: function(cont) {
    var self = this;
    self.origen.puedeExtraer(self.monto, function (puede) {
      if(puede) {
        console.log("Extrayendo " + self.monto + " de " + self.origen._monto + " hacia " + self.destino._monto);
        self.origen.extraer(self.monto, function () {
          console.log("Depositando " + self.monto + " de " + self.origen._monto + " hacia " + self.destino._monto);
          self.destino.depositar(self.monto, cont);
        });
      } else {
        cont();
      }
    });
  }
};

module.exports = Transferencia;


