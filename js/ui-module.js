"use strict"

export class UI{
    home=document.getElementById("home");
    loadingPage=document.getElementById("loading");
    
    changeActive(arr,navSelect){
        for (let index = 0; index < arr.length; index++) {
            arr[index].classList.remove("active");
            
        }
        navSelect.target.classList.add("active");
    }

    navbarAnimation(){
      const element = document.getElementsByTagName("nav");
      const scrollPosition = window.scrollY;
      // Change color based on scroll position
      if (scrollPosition > 245) {
          element[0].classList.add("fixed-top");
      }else{
          element[0].classList.remove("fixed-top");
      } 
    }


   
}