import React from 'react'

function WeatherList(props) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date();
    return (
        <div className='weather-table'>
            <table id="weatherTable">
                <tbody>
                    <tr>
                        {
                            days.slice(today.getDay() - 1, today.getDay() - 1 + 7).map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            props.weathers.map((item, index) => (
                                <td key={index}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`${item.weather[0].icon}`}></img></td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            props.weathers.map((item, index) => (
                                <td key={index}> {`${Math.round(item.temp.max - 273)}°C`} <br />  <br />{`${Math.round(item.temp.min - 273)}°C`}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherList