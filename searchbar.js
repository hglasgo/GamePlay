var button = document.querySelector('.button');
const searchbBar = document.getElementById('searchBar');
let gameGenre =[];
searchbBar.addEventListener('keyup',(e) =>{
console.log(e.target.value)
gameGenre.filter( genre =>{
    genre.name.contain()
})
});

button.addEventListener('click',function(){
    fetch('https://api.rawg.io/api/genres?key=9b83a1b6cab24aa0a0eb0cff97707424')
.then(Response => Response.json())
.then(data => console.log(data))


.catch(err => alert ("no genre"))

})
