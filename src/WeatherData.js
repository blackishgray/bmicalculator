import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const WeatherData = ({data}) => {
  const { main, name, sys, weather, dt } = data;


const d = moment.unix(dt).format('YYYY-MM-DDTHH:mm:ssZ')
const date = d.split('T')
  if(data.length != 0){
    const sunriseN = new Date(sys['sunrise'])
    const sunriseNM = sunriseN.toUTCString();
    console.log(sunriseNM)
    return (
      <>
      <div className='table'>
        <h2>{name}</h2>
        <table>
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Weather</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{main['temp']}</td>
              <td>{weather[0]['main']}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
    )
  }else{
    return <h2>Search A city</h2>
  }

}

export default WeatherData;
