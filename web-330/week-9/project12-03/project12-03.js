"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nadia Gainer
      Date: 5/19/24   

      Filename: project12-03.js
*/
$(document).ready(function(){
      $("article > h2").click(function(){
            const heading= $(this)
            const list = heading.next()
            const headingImage = heading.find("img")
            list.slideToggle(500)
            if(headingImage.attr("src")==="plus.png")
      headingImage.attr("src", "minus.png")
            else headingImage.attr("src", "plus.png")
      })
      })
      
      

