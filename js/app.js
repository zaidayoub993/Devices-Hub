'use strict';
// ===========================
// constructor function
// ===========================
var lists = [];
var List = function (name, category, quantity, price) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.total = 0;
    lists.push(this);
}
// =====================
// calculate the price
// =====================
List.prototype.total = function () {
    this.total = this.quantity * this.price;
}
// ======================
// creating a table 
// ======================
var tableHd = ['name', 'category', 'quantity', 'price'];
var sectionEl = document.getElementById('tableSection');
var tableEl = document.createElement('table');
sectionEl.appendChild(tableEl);
function tableH (){
    var trEl = document.createElement('tr');
    tableEl.appendChild(thEl);
    for( var i = 0 ; i < tableHd.length; i++){
        var thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = tableHd[i];
    }
}
tableH();
lists.prototype.render=function(){
    var trEl= document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    trEl.textContent = this.name;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    trEl.textContent = this.category;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    trEl.textContent = this.quantity;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    trEl.textContent = this.price;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    trEl.textContent = this.total;
}
// ====================
// the submit 
// ====================
var form = document.getElementById('form');
formEl.addEventlistener('submit',addList);
function addList(event){
    event.preventDefault();
    var name = event.target.name.value;
    var category = event.target.category.value;
    var quantity = event.target.quantity.value;
    var price = event.target.price.value;
    var addList= new List(name, category, quantity, price);
    addList.getTotal();
    addList.render();
    formEl.reset();
    render.Rows();
}