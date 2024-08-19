"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: 
      Date:   

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

const name =sessionStorage.getItem("riderName")
const age =sessionStorage.getItem("ageGroup")
const bike =sessionStorage.getItem("bikeOption")
const route =sessionStorage.getItem("routeOption")
const acc=sessionStorage.getItem("accOption")
const place=sessionStorage.getItem("region")
const mile=sessionStorage.getItem("miles")
const comment=sessionStorage.getItem("comments")

riderName.textContent = name
ageGroup.textContent = age
bikeOption.textContent =bike
routeOption.textContent =route
accOption.textContent =acc
region.textContent =place
miles.textContent =mile
comments.textContent =comment