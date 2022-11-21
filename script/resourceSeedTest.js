import axios from axios

const education = axios.get('https://data.cityofnewyork.us/resource/ji82-xba5.json?overabbrev=NYCDOE')

console.log(education)