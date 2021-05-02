import Weather from "./CurrentWeatherData/Weather";
import './App.css';


function App() {


  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}

export default App;

