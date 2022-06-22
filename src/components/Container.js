import { useWeather } from "../context/WeatherContext";
import Dropdown from "./Dropdown";
import WeatherList from "./WeatherList";

function Container() {
    const {weathers, sehir, setSehir, sehirler} = useWeather();
    return <div>
       
         <Dropdown sehir={sehir} setSehir={setSehir} sehirler={sehirler} />
         <WeatherList weathers={weathers} />

    </div>
}

export default Container;