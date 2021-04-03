

export const testAPI = (path) => {
 return fetch(`http://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`)
          .then((response) => response.json())
}