//what we want to do: make an object that represents the store with min, max customers and avg cookies bought at hourly standards. 
var openHours = 15;

function add(el, el2) {
 return el + el2;
}


var firstandpike ={
  minCustomers = 23,
  maxCustomers = 65,
  avgPerCustomer = 6.3,
  cookiesPerHour = [],
  customerGen: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  populateCookiesPurchased: function (){
    for (var i = 0; i < openHours - 1; i++){
      var cookiesPurchased = this.customerGen() * this.avgPerCustomer;
      this.cookiesPerHour.push(cookiesPurchased);
    }
  },
  calculateTotalCookies: function(cph){ 
    return cph.reduce(add, 0)
  }
}