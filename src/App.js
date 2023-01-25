 import {useState} from 'react';
 import axios from 'axios'; 

function App() {
                                           
  const [city, setCity] = useState('');

  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e5fcba575a1e485f66aae24b59be65b`;

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => {
    setData(response.data);
    });
    setCity('');
    }

  return (
    <div className="App">
      <div className="search">
        <input type="text" 
        placeholder='Enter city name'
        value={city}
        onChange={event => setCity(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data.name !== undefined && 
        <div className="name">
          <h1>{data.name}, {data.sys.country}</h1>
          <p className='date'>{Date().slice(0,15)}</p>
        </div>
      } 

      {data.name !== undefined && 
        <div className="output">
      
        <div className="left"> 
          <div className="temp">
            {data.main ? <h1>{data.main.temp} <sup>°F</sup></h1> : null}
            <p>Clouds</p>
          </div>
        </div>

        <div className="right">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like}<sup>°F</sup></p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="min">
            {data.main ? <p className='bold'>{data.main.temp_min}<sup>°F</sup></p> : null}
            <p>Min temp</p>
          </div>
          <div className="max">
            {data.main ? <p className='bold'>{data.main.temp_max}<sup>°F</sup></p> : null}
            <p>Max temp</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} Km/h</p> : null}
            <p>Wind speed</p>
          </div>
          <div className="visibility">
            {data.visibility ? <p className='bold'>{data.visibility} Km</p> : null}
            <p>Visibility</p>
          </div>
        </div>

      </div>
      }
    </div>
  );
}

export default App;
