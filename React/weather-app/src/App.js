import api_key from './apikey';
import './App.css';

function WeatherApp() {
  // API: docs.ambeedata.com
  // API: https://api.ambeedata.com/latest/by-lat-lng?lat=37.774929&lng=-122.419418

  // Build the API call
  const api_call = `https://api.ambeedata.com/latest/by-lat-lng?lat=37.774929&lng=-122.419418`;

  // Make the API call
  fetch(api_call, {
    headers: {
      'x-api-key': api_key
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
  
  return (
    <div className='WeatherApp'>

    </div>
  );
}

export default WeatherApp;
