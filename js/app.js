'use strict';
//what we want to do: make an object that represents the store with min, max customers and avg cookies bought at hourly standards. 
var openHours = 15;
var ulEl = document.createElement('ul');

function add(el, el2) {
 return el + el2;
}


var firstandpike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  populateCookiesPurchasedAndHours: function (){
    for (var i = 0; i < openHours - 1; i++){
      var cookiesPurchased = Math.floor(this.customerGen() * this.avgPerCustomer);
      this.cookiesPerHour.push(cookiesPurchased);
      if (i > 6) {
        this.hour.push((i-6) + 'PM')
      } else {
        this.hour.push((i+6) + 'AM')
      }
      this.concacenatedCPHandHour[i] = (this.hour[i] +': ' + this.cookiesPerHour[i])
    }
  },
  calculateTotalCookies: function(){ 
    return this.cookiesPerHour.reduce(add, 0)
  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      var cookiesReport = document.getElementById('sales');
      cookiesReport.appendChild(ulEl);
    }
  },
  appendNameToHtml: function(){
    var pEl = document.createElement('p');
    pEl.textContent = this.name;
    var nameOfStore = document.getElementById('sales');
    nameOfStore.appendChild(pEl);
  },
}

function godTestRunner() {
  firstandpike.populateCookiesPurchasedAndHours();
  firstandpike.calculateTotalCookies();
  firstandpike.appendNameToHtml();
  firstandpike.appendCookiesToHtml();
}