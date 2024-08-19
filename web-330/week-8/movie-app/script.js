/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Nadia Gainer
  Date: 05/12/24
  Filename: movie app
*/

"use strict";

const movies = [
  // Add your movie objects here
  {title:"Danger", director: "Nadia", year: 2000, synopsis: " A movie about danger"  }
  ,{title:"Laugh", director: "Nadia", year: 2005, synopsis: " A movie about laughing"  }
  ,{title:"Action", director: "Nadia", year: 2024, synopsis: " A movie about action"  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
      const selectedmovie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase())
      if (selectedmovie)
        resolve(selectedmovie)
      else 
      reject("movie does not exist")
    }, 1000)
  })
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault()
  const usertitle = document.getElementById("title-input")
  try{
    const movie=await fetchMovie(usertitle.value)
    document.getElementById("movie-title").textContent= `title: ${movie.title}`
    document.getElementById("movie-director").textContent= `director: ${movie.director}`
    document.getElementById("movie-year").textContent= `year: ${movie.year}`
    document.getElementById("movie-synopsis").textContent=`synopsis: ${movie.synopsis}`
    document.getElementById("error-message").textContent= ""
  }
  catch(error){
    document.getElementById("error-message").textContent= error
  }
});
