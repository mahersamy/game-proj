"use strict"

export class GameDetails{
    btnClose=document.getElementById("btnClose");
    gameSection=document.getElementById("game-detail-section");
    games=document.getElementById("detail-game");
    loadingPage=document.getElementById("loading");
    nav= document.getElementsByTagName("nav");

    close(){
        this.btnClose.addEventListener("click",(e)=>
        this.gameSection.classList.add("d-none") 
    )}

    displayGame(game){
        this.gameSection.classList.remove("d-none")
          let display=`
              <div class="col-md-4 mt-md-3 mt-1">
              <img class="w-100 d-block" src="${game.thumbnail}" alt="image for a game">
            </div>
            <div class="col-md-8 text-light font-comfortaa">
              <p class="h1">Title: ${game.title}</p>
              <ul class="p-2">
                <p>Category: <span class="badge text-black badge-color-blue-light fs10">${game.genre}</span></p>
                <p>Platform: <span class="badge text-black badge-color-blue-light fs10">${game.platform}</span></p>
                <p>Status: <span class="badge text-black badge-color-blue-light fs10">Live</span></p>
              </ul>
              <p class="fs14">
              ${game.short_description}
              </p>
                <button type="button" class="btn btn-outline-warning text-light" onclick="window.location='${game.game_url}'">Show Game</button>  
  
            </div>
              `;              
          this.games.innerHTML=display;
          this.loadingPage.classList.add("d-none")
          this.close();
  
      }
}