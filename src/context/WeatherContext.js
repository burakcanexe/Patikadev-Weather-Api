import axios from "axios";
import sehirler from '../json/cities.json'


const { createContext, useContext, useState, useEffect } = require("react");

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState([]);
  const [sehir, setSehir] = useState(sehirler[1])

  const apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${sehir.latitude}&lon=${sehir.longitude}&exclude='daily'&appid=1238f59ff4cd35c72c33f74f2296a894`

  useEffect(() => {

    axios.get(apiURL)
      .then((response) => setWeathers(response.data.daily))
      .catch((err) => console.log('Catch data failed  => ' + err));

  })


  const values = {
    weathers,
    setWeathers,
    sehir,
    setSehir,
    sehirler
  }

  return <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);