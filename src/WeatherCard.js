import {useState, useEffect, useRef} from 'react';

import {options} from './Credentials';
import WeatherData from './WeatherData';

const WeatherCard = () => {

  const [data, setData] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [weightClass, setWeightClass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleClick = () => {
    console.log(weight, height)
    fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`, options)
  	.then(response => response.json())
  	.then(response => setData(response))
  	.catch(err => console.error(err));
  }

  const bmi = 45;
  const wclass = 'normal class';

  if(data.length !== 0){
     fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${data['bmi']}`, options)
     .then(response => response.json())
     .then(response =>setWeightClass(response))
     .catch(err => console.error(err));
     console.log(data)
  }

  return (
      <section className='card'>
        <h2>BMI and Weight Class</h2>
        <div>
          <form action='submit' className='form' onSubmit={handleSubmit}>
            <input placeholder='Weight' type='number' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            <input placeholder='Height' type='number' value={height} onChange={(e) => setHeight(e.target.value)}/>
            <button type='submit' onClick={handleClick} className='btn'>Submit</button>
        </form>
        </div>
          <div>
            <br></br>
            <h3 className='bmi'>BMI : {data['bmi']}</h3>
            <h3 className='weightClass'>weight class : {weightClass}</h3>
          </div>
      </section>
  )
}

export default WeatherCard;
