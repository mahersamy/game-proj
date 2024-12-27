"use strict"
import { UI } from "./ui-module.js";
import { Home } from "./home.js";
import { GameDetails } from "./game-details.js";



let navlinks=document.querySelectorAll("nav .navbar-nav .nav-link");
const ui = new UI();
const home=new Home();
const gameDetail= new GameDetails();
let gamesCards=








home.getGames("mmorpg").then( async function (res){
    
    await home.displaydata(res);
    gamesCards=document.querySelectorAll(".game-item");
    
    for (let index = 0; index < gamesCards.length; index++) {
        gamesCards[index].addEventListener("click",function(event){           
        let game=res[index];
        gameDetail.displayGame(game);
    
    });
    
    }


});


window.addEventListener('scroll', () => {
   ui.navbarAnimation()
});

navlinks.forEach((element)=>element.addEventListener("click",function(event){
    event.preventDefault();
    ui.changeActive(navlinks,event);
    home.getGames(event.target.textContent).then(function (res){
       
        ui.displaydata(res);
        gamesCards=document.querySelectorAll(".game-item");

        for (let index = 0; index < gamesCards.length; index++) {
            gamesCards[index].addEventListener("click",function(event){
               
            let game=res[index];
            gameDetail.displayGame(game);
        
        });
        
        }
       
        
            });
        }
    )
);












