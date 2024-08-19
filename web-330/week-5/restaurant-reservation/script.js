/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Nadia Gainer
  Date:04/21/24
  Filename:resteraunt-reservation 
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
{tableNumber: 1, capacity: 1, isReserved:false},
{tableNumber: 2, capacity: 2, isReserved:false},
{tableNumber: 3, capacity: 3, isReserved:false},
{tableNumber: 4, capacity: 4, isReserved:false},]
// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const foundtable = tables.find(table=>table.tableNumber===parseInt(tableNumber))
  if (!foundtable) {callback("This Table Was Not Found"); return}
  if (!foundtable.isReserved) {foundtable.isReserved=true; setTimeout(()=>{callback(`table ${foundtable.tableNumber} Has Been Reserved`)},time)}
  else {callback(`Table ${foundtable.tableNumber} Space Has Been Already Reserved`); return}
}
// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault()
  const name= document.getElementById("name").value 
  const tableNumber = document.getElementById("tableNumber").value
  const time= 10000
  function callback(message){
    document.getElementById ("message").innerText=message
  }
  reserveTable(tableNumber,callback,time)
  });
