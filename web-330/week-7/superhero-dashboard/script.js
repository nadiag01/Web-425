/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:Nadia Gainer
  Date:5/5/24
  Filename:Superhero dashboasrd

*/

"use strict";

let heroes = [
  // TODO: Create superhero objects
{name:"superman",superpower:"strength",weakness:"kryptonite",city:"New York"},
{name:"batman",superpower:"detective",weakness:"joker",city:"gotham"},
{name:"wonderwoman",superpower:"lasso",weakness:"guns",city:"dallas"}];

function fetchHero1() {
  // TODO: Implement this function
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const random = Math.random()
    if (random<0.7){
      resolve(heroes[0])
    }
    else{
      reject("couldn't fetch the hero: "+ heroes[0].name)
    }
  },2000)

})}

function fetchHero2() {
  // TODO: Implement this function
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const random = Math.random()
      if (random<0.7){
        resolve(heroes[1])
      }
      else{
        reject("couldn't fetch the hero: "+ heroes[1].name)
      }
    },3000)
  
  })}

function fetchHero3() {
  // TODO: Implement this function
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const random = Math.random()
      if (random<0.7){
        resolve(heroes[2])
      }
      else{
        reject("couldn't fetch the hero: "+ heroes[2].name)
      }
    },4000)
  
  })}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage
const promiselist= [fetchHero1(),fetchHero2(),fetchHero3()]
Promise.allSettled(promiselist).then(results =>{
  results.forEach((result,index)=>{
    const herodiv=document.getElementById(`hero${index+1}`)
    if (result.status==="fulfilled"){
      const data=result.value
      const name=document.createElement("p")
      name.textContent=`name: ${data.name}`
      herodiv.appendChild(name)

      const superpower=document.createElement("p")
      superpower.textContent=`superpower: ${data.superpower}`
      herodiv.appendChild(superpower)

      const weakness=document.createElement("p")
      weakness.textContent=`weakness: ${data.weakness}`
      herodiv.appendChild(weakness)

      const city=document.createElement("p")
      city.textContent=`city: ${data.city}`
      herodiv.appendChild(city)
    }
    else{
      const error=document.createElement("p")
      error.textContent=`error: ${result.reason}`
      herodiv.appendChild(error)
    }
  })
}) 