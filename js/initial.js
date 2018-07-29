'use strict';
//what we want to do: make an object that represents the store with min, max customers and avg cookies bought at hourly standards. 
var openHours = 15;
var ulEl = document.createElement('ul');
var ulEl2 = document.createElement('ul');
var ulEl3 = document.createElement('ul');
var ulEl4 = document.createElement('ul');
var ulEl5 = document.createElement('ul');


function add(el, el2) {
 return el + el2;
}


var first = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
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
    first.concacenatedCPHandHour.push(this.cookiesPerHour.reduce(add, 0));

  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.concacenatedCPHandHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.concacenatedCPHandHour[i];
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
  generator: function() {
    this.populateCookiesPurchasedAndHours();
    this.calculateTotalCookies();
    this.appendNameToHtml();
    this.appendCookiesToHtml();
  }
}

var seatac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgPerCustomer: 1.2,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  populateCookiesPurchasedAndHours: function () {
    for (var i = 0; i < openHours - 1; i++) {
      var cookiesPurchased = Math.floor(this.customerGen() * this.avgPerCustomer);
      this.cookiesPerHour.push(cookiesPurchased);
      if (i > 6) {
        this.hour.push((i - 6) + 'PM')
      } else {
        this.hour.push((i + 6) + 'AM')
      }
      this.concacenatedCPHandHour[i] = (this.hour[i] + ': ' + this.cookiesPerHour[i])
    }
  },
  calculateTotalCookies: function () {
    first.concacenatedCPHandHour.push(this.cookiesPerHour.reduce(add, 0));

  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.concacenatedCPHandHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.concacenatedCPHandHour[i];
      ulEl2.appendChild(liEl);
      var cookiesReport = document.getElementById('sales');
      cookiesReport.appendChild(ulEl2);
    }
  },
  appendNameToHtml: function () {
    var pEl = document.createElement('p');
    pEl.textContent = this.name;
    var nameOfStore = document.getElementById('sales');
    nameOfStore.appendChild(pEl);
  },
  generator: function () {
    this.populateCookiesPurchasedAndHours();
    this.calculateTotalCookies();
    this.appendNameToHtml();
    this.appendCookiesToHtml();
  }
}

var seattlecen = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgPerCustomer: 3.7,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  populateCookiesPurchasedAndHours: function () {
    for (var i = 0; i < openHours - 1; i++) {
      var cookiesPurchased = Math.floor(this.customerGen() * this.avgPerCustomer);
      this.cookiesPerHour.push(cookiesPurchased);
      if (i > 6) {
        this.hour.push((i - 6) + 'PM')
      } else {
        this.hour.push((i + 6) + 'AM')
      }
      this.concacenatedCPHandHour[i] = (this.hour[i] + ': ' + this.cookiesPerHour[i])
    }
  },
  calculateTotalCookies: function () {
    first.concacenatedCPHandHour.push(this.cookiesPerHour.reduce(add, 0));

  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.concacenatedCPHandHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.concacenatedCPHandHour[i];
      ulEl3.appendChild(liEl);
      var cookiesReport = document.getElementById('sales');
      cookiesReport.appendChild(ulEl3);
    }
  },
  appendNameToHtml: function () {
    var pEl = document.createElement('p');
    pEl.textContent = this.name;
    var nameOfStore = document.getElementById('sales');
    nameOfStore.appendChild(pEl);
  },
  generator: function () {
    this.populateCookiesPurchasedAndHours();
    this.calculateTotalCookies();
    this.appendNameToHtml();
    this.appendCookiesToHtml();
  }
}
var capitol = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgPerCustomer: 2.3,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  populateCookiesPurchasedAndHours: function () {
    for (var i = 0; i < openHours - 1; i++) {
      var cookiesPurchased = Math.floor(this.customerGen() * this.avgPerCustomer);
      this.cookiesPerHour.push(cookiesPurchased);
      if (i > 6) {
        this.hour.push((i - 6) + 'PM')
      } else {
        this.hour.push((i + 6) + 'AM')
      }
      this.concacenatedCPHandHour[i] = (this.hour[i] + ': ' + this.cookiesPerHour[i])
    }
  },
  calculateTotalCookies: function () {
    first.concacenatedCPHandHour.push(this.cookiesPerHour.reduce(add, 0));

  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.concacenatedCPHandHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.concacenatedCPHandHour[i];
      ulEl4.appendChild(liEl);
      var cookiesReport = document.getElementById('sales');
      cookiesReport.appendChild(ulEl4);
    }
  },
  appendNameToHtml: function () {
    var pEl = document.createElement('p');
    pEl.textContent = this.name;
    var nameOfStore = document.getElementById('sales');
    nameOfStore.appendChild(pEl);
  },
  generator: function () {
    this.populateCookiesPurchasedAndHours();
    this.calculateTotalCookies();
    this.appendNameToHtml();
    this.appendCookiesToHtml();
  }
}
var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgPerCustomer: 4.6,
  cookiesPerHour: [],
  hour: [],
  concacenatedCPHandHour: [],
  customerGen: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  populateCookiesPurchasedAndHours: function () {
    for (var i = 0; i < openHours - 1; i++) {
      var cookiesPurchased = Math.floor(this.customerGen() * this.avgPerCustomer);
      this.cookiesPerHour.push(cookiesPurchased);
      if (i > 6) {
        this.hour.push((i - 6) + 'PM')
      } else {
        this.hour.push((i + 6) + 'AM')
      }
      this.concacenatedCPHandHour[i] = (this.hour[i] + ': ' + this.cookiesPerHour[i])
    }
  },
  calculateTotalCookies: function () {
    first.concacenatedCPHandHour.push(this.cookiesPerHour.reduce(add, 0));

  },
  appendCookiesToHtml: function () {
    for (var i = 0; i < this.concacenatedCPHandHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.concacenatedCPHandHour[i];
      ulEl5.appendChild(liEl);
      var cookiesReport = document.getElementById('sales');
      cookiesReport.appendChild(ulEl5);
    }
  },
  appendNameToHtml: function () {
    var pEl = document.createElement('p');
    pEl.textContent = this.name;
    var nameOfStore = document.getElementById('sales');
    nameOfStore.appendChild(pEl);
  },
  generator: function () {
    this.populateCookiesPurchasedAndHours();
    this.calculateTotalCookies();
    this.appendNameToHtml();
    this.appendCookiesToHtml();
  }
}

function godTestRunner() {
  first.generator();
  seatac.generator();
  seattlecen.generator();
  capitol.generator();
  alki.generator();
  /* seatac.generator(); */
}

godTestRunner();