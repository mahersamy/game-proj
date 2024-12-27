"use strict"
export class Home{
    home=document.getElementById("home");
    loadingPage=document.getElementById("loading");
    baseUrl = 'https://free-to-play-games-database.p.rapidapi.com';
    endPoint='/api/games';
    options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '30ed582c14msh5cee289c7035b24p1eb726jsn1b154c0c524b',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    async getGames(category){
        try {
            let loadingPage=document.getElementById("loading")
            loadingPage.classList.remove("d-none");
            const response = await fetch(this.baseUrl+this.endPoint+"?category="+category, this.options);
            const result = await response.json();

            return result;
        } catch (error) {
            return error;
        }
    }


   
    async displaydata(arrOfGames){
      let loadingPage=document.getElementById("loading");
        let display="";
        for (let index = 0; index < arrOfGames.length; index++) {
            display +=`
             <div class="col-md-6 col-lg-4 col-xl-3 ">
              <div class="game-item text-light border border-1 rounded-1 border-dark">
                <div class="inner p-3 ">
                  <picture class="overflow-hidden ">
                    <img class="w-100 rounded-1" src="${arrOfGames[index].thumbnail}" alt="image for a game">
                  </picture>

                <div class="content d-flex justify-content-between align-items-center text-center pt-2 ">
                  <p>${arrOfGames[index].title}</p>
                  <span class="badge font-comfortaa bg-primary">Free</span>
                </div>
                <p class="desc text-center opacity-50 m-1 overflow-hidden">
                  ${arrOfGames[index].short_description}
                </p>
               
                </div>
                <div class="footer d-flex justify-content-between py-2 px-3 border border-1 font-comfortaa small  border-dark">
                  <span class="badge badge-color">${arrOfGames[index].genre}</span>
                  <span class="badge badge-color">${arrOfGames[index].platform}</span>
                </div>
              </div>
            </div>
            `;
            
        }
        loadingPage.classList.add("d-none")
        this.home.innerHTML=display;
        
    }
}