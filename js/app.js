'use strict';

var openHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12AM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM']; 
var stores = [];


function add(el, el2) {
  return el + el2;
}
renderTopRow();
function Store(name,min,max,avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg; 
  this.cph = [];
  this.total = 0;
  stores.push(this);
  this.populateCPH();
}

Store.prototype.randomGen = function() {
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
};

Store.prototype.populateCPH = function() {
  for (var i = 0; i < openHours.length; i++) {
    var cookiesPurchased =  Math.floor(this.randomGen() * this.avg);
    this.cph.push(cookiesPurchased);
  }
this.total = this.cph.reduce(add, 0);
this.render();
};
Store.prototype.render = function() {
  var trEl = document.createElement('tr'); 
  var storage = document.getElementById('dead').firstElementChild;
  storage.appendChild(trEl);
  var nametdEl = document.createElement('td');
  nametdEl.textContent = this.name;
  trEl.appendChild(nametdEl);
  for (var i = 0; i < openHours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cph[i];
    trEl.appendChild(tdEl);
  } 
  var totaltdEl = document.createElement('td');
  totaltdEl.textContent = this.total; 
  trEl.appendChild(totaltdEl);
}

function renderTopRow() {
  var tableEl = document.createElement('table');
  var loke = document.getElementById('dead');
  loke.appendChild(tableEl);
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl); 
  var emptyline = document.createElement('td');
  trEl.appendChild(emptyline);
  for (var i = 0; i < openHours.length; i++){
    var tdEl = document.createElement('th');
    tdEl.textContent = openHours[i];
    trEl.appendChild(tdEl);
  }

};



new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capitol Hill',20,38,2.3);
new Store('Alki',2,16,4.6);
