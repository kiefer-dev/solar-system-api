// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
let PORT = process.env.PORT || 8000;
app.use(cors());


// API Object to serve
const planets = {
  'sun': {
    'name': 'The Sun',
    'millionKmFromSun': 0,
    'diameterKM': 1391000,
    'numMoons': 0,
  },
  'mercury': {
    'name': 'Mercury',
    'millionKmFromSun': 57.9,
    'diameterKM': 4879,
    'numMoons': 0,
  },
  'venus': {
    'name': 'Venus',
    'millionKmFromSun': 108.2,
    'diameterKM': 12104,
    'numMoons': 0,
  },
  'earth': {
    'name': 'Earth',
    'millionKmFromSun': 149.6,
    'diameterKM': 12756,
    'numMoons': 1,
  },
  'mars': {
    'name': 'Mars',
    'millionKmFromSun': 228.0,
    'diameterKM': 6792,
    'numMoons': 2,
  },
  'jupiter': {
    'name': 'Jupiter',
    'millionKmFromSun': 778.5,
    'diameterKM': 142984,
    'numMoons': 79,
  },
  'saturn': {
    'name': 'Saturn',
    'millionKmFromSun': 1432.0,
    'diameterKM': 120536,
    'numMoons': 82,
  },
  'uranus': {
    'name': 'Uranus',
    'millionKmFromSun': 2867.0,
    'diameterKM': 51118,
    'numMoons': 27,
  },
  'neptune': {
    'name': 'Neptune',
    'millionKmFromSun': 4515.0,
    'diameterKM': 49528,
    'numMoons': 14,
  },
  'pluto': {
    'name': 'Pluto',
    'millionKmFromSun': 5906.4,
    'diameterKM': 2376,
    'numMoons': 5,
  },
  'unknown': {
    'name': 'Unknown',
    'millionKmFromSun': 0,
    'diameterKM': 0,
    'numMoons': 0,
  }
}


// Serve up a file for when they request the main page (GET)
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
})


// Serve up JSON API info
app.get('/api/:name', (request, response) => {
  const planetName = request.params.name.toLowerCase();
  if( planets[planetName]) {
    response.json(planets[planetName]);
  } else {
    response.json(planets['unknown']);
  }
})


//Listen on port 8000
app.listen(PORT, _ => {
  console.log(`The server is running on port ${PORT}. Betta go catch it!`);
})