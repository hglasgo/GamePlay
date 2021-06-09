var apiRAwgames = "https://api.rawg.io/api/games"

var PlaystationA ="?platforms=16,18,187&key=9b83a1b6cab24aa0a0eb0cff97707424"

fetch(apiRAwgames + PlaystationA)
.then(Response => Response.json())
.then(data => {console.log(data.results);
    const html = data.results.map(games =>{
    return `
    <div class= "apiStuff">
    <p>game: ${games.name} </p>
    <p> rating: ${games.metacritic}</p>
    <p> esrb rating: ${games.esrb_rating.name}</p>
    <p><img src= ${games.background_image}></p>
    
    </div>`  
 }).join("");
 console.log(html)
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

})


.catch(err => alert ("no game"))

