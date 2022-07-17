import WeatherCard from './WeatherCard';
import { useEffect } from 'react';

const App = () => {

  useEffect ( () => {
    document.title = "bmiweightclasscalculator";
  }, [])


  return (
    <div className="App">
      <WeatherCard />
    </div>
  );
}

export default App;
