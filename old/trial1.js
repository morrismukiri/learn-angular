angular.module("trial1", []).
    controller('trialController', function () {
    this.qnty=1;
    this.cost=2;
    this.initialCurrency="USD";
    this.currencies=['EUR','USD','CNY'];
    this.usdToForeignCurrencies={
        EUR:0.74,
        USD:1,
        CNY:6.09
    };
    this.total= function total(outCurrency) {
      // console.log('qnty:'+this.qnty + ' cost:'+this.cost);
      var total=this.convertCurrency((this.qnty * this.cost),this.initialCurrency,outCurrency);
      // console.log('Total:' + total);
        return total;
    };
    this.convertCurrency= function convertCurrency(amount,inCurrency,outCurrency) {
      return ((amount * this.usdToForeignCurrencies[outCurrency]) / this.usdToForeignCurrencies[inCurrency]);
    };
    this.pay= function pay() {
      window.alert('Thank you for paying');
    };
});
