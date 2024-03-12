import { useState } from 'react';
import './App.css';

function SearchBar({onSearch}){
  const [zip,setzip] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(zip);
  };
  const handleReset = () =>{
    setzip('');
  }
  return(
    <form onSubmit={handleSearch}>
      <input type="text" placeholder='Search ZipCode' value={zip}
      onChange={e=>setzip(e.target.value)} />
      <input type='submit' value='Search' onClick={handleSearch}/>
      <input type='button' value='Reset' onClick={handleReset}/>
    </form>
  );
}

function DropDown({cities, onSelect}){
  return(
    <select onChange={e=> onSelect(e.target.value)}>
      <option value="">Select City</option>
      {Object.keys(cities).map(zip =>(
        <option key={zip} value={zip}>{cities[zip].name}</option>
      ))}
    </select>
  );
}

function Temperature({city, temp}){
  return(
    <div className='temp'>
      <h2>In {city}</h2>
      <p>Temperature = {temp} Celsius</p>
    </div>
  );
}

function Weather(){
  const cities = [{
    name:'delhi',
    temp: '30',
    zip: '110001'
  },
{
    name:'mumbai',
    temp: '27',
    zip: '400001'
  },
  {
    name:'chennai',
    temp: '29',
    zip: '600001'
  },
  {
    name:'kolkata',
    temp: '32',
    zip: '700001'
  },
  {
    name:'None',
    temp: '',
    zip: ''
  }
  ];

  const [selectedCity,setSelectedcity] = useState(null);
  const [temp,setTemp] = useState(null);

  const handleSearch = (zip) =>{
    const city = cities[zip];
    if(city){
      setSelectedcity(city.name);
      setTemp(city.temp);
    }
    else{
      setSelectedcity(null);
      setTemp(null);
    }
  };
  return(
    <div className='Container'>
      <SearchBar onSearch={handleSearch} />
      <br />
      <DropDown cities = {cities} onSelect={handleSearch} />
      <br />
      {selectedCity && temp && <Temperature city = {selectedCity} temp={temp} />}
    </div>
  );
}

export default Weather;