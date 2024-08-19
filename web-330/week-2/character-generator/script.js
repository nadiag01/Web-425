/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Nadia Gainer
  Date: 03/28/24
  Filename: character-generator
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
return {
  getName: function(){
    return name;
  },
 getGender: function() {
  return gender;
 },
 getClass: function(){
    return characterClass;
  }
}
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
const name = document.getElementById('heroName').value 
const gender = document.getElementById('heroGender').value
const characterClass = document.getElementById('heroClass').value

  // TODO: Create character
let character = createCharacter(name,gender,characterClass);

  // TODO: Display character information
  const characterdiv = document.getElementById("characterOutput")
  const nametext = document.createElement('p')
  const gendertext = document.createElement('p')
  const classtext = document.createElement('p')
nametext.innerHTML = `Name: ${character.getName()}`
gendertext.innerHTML = `Gender: ${character.getGender()}`
classtext.innerHTML = `Class: ${character.getClass()}`
characterdiv.append(nametext,classtext,gendertext)
});

