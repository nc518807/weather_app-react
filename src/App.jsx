import HotBg from './assets/hot.jpg'
import ColdBg from './assets/cold.jpg'
import './index.css'
import Description from './components/Description'
import { useEffect, useState } from 'react'
import { getFormattedWeatherData } from './weather'

const App = () => {
  const [Weather, setWeather] = useState(null);
  const [Units, setUnits] = useState("metric");
  const [city, setcity] = useState("paris");
  const [bg, setbg] = useState(HotBg)

  useEffect(() => {
    const FetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, Units)
      setWeather(data);

      const threshold = Units === "metric" ? 20 : 60;
      if (data.temp <= threshold) 
        setbg(ColdBg);
       else 
        setbg(HotBg);
    }
    FetchWeatherData();

  }, [Units, city]);

  const handleUnitClicks = (e) => {

    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial");
  }

  const EnterkeyPressed = (e) => {
    if (e.keyCode === 13) {
      setcity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  }



  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          Weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={EnterkeyPressed} type="text" name='city' placeholder='enter city..' />
                <button onClick={(e) => handleUnitClicks(e)}> °F</button>
              </div>
              <div className="section section__temperature">
                <div className="icon">

                  <h1>{`${Weather.name},${Weather.country}`}</h1>
                  <img src={Weather.iconURL} alt="" />
                  <h3>{Weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${Weather.temp.toFixed()}°${Units === 'metric' ? "C" : 'F'}`}</h1>
                </div>
              </div>

              <Description Weather={Weather} Units={Units} />
            </div>


          )
        }

      </div>
    </div >

  )
}

export default App