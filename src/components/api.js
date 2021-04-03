
export const testAPI = (path) => {
 return fetch(`http://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
          .then((response) => response.json())
}