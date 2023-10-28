const API_KEY = 'api_key=5212bcd096a81ebe7da9b84a19a05cec'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY

getMovies(API_URL)
const filmBox = document.querySelector('#film-box')


function getMovies(url){
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjEyYmNkMDk2YTgxZWJlN2RhOWI4NGExOWEwNWNlYyIsInN1YiI6IjY1M2MxMDMyYzhhNWFjMDEzYTg2NTNmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yF-YczjUvs-j8_zJRWUQquzQYd9rY7qNaE44yITyt60'
        }
      };

    fetch(url, options).then(res => res.json()).then(data =>{
        console.log(data);
        showMovies(data.results)
    })
}

function showMovies(data){
    filmBox.innerHTML = ''
    
    data.forEach(movie =>{
        const IMG_URL = `https://api.themoviedb.org/3/movie/${movie.id}/images`
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement('button')
        movieEl.classList.add('bg-red-600', 'shadow-md','rounded-lg', 'border', 'w-44', 'object-contain','overflow-hidden')
        movieEl.innerHTML = `
        
            <img src="${IMG_URL+poster_path}" class="w-44 " alt="${title}">
            <div class="flex justify-between items-center p-2 text-white">
                <p class="font-semibold">${title}</p>
                <p class="bg-red-200 text-red-600 font-semibold px-2 shadow-md">${vote_average}</p>
            </div>
        `
        filmBox.appendChild(movieEl)
    })
}



// const darkBtn = document.querySelector('#dark-btn')
// const toggleDark = document.querySelector('#toggle-dark')
// const moon = ''
// darkBtn.addEventListener('click', ()=>{
//     document.documentElement.classList.toggle('dark')
//     if (document.documentElement.className == 'dark'){
//         toggleDark.className = 'bx bx-sun'
//     } else{
//         toggleDark.className = 'bx bx-moon'
//     }
// })

