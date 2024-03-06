import React, { useState, useEffect } from 'react';
import FlightList from './FlightList';
import Filter from './Filter';
import Sort from './Sort';
import Footer from './Footer'
import AirlineSVG from './assets/logo.png'
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [searchSource, setSearchSource] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  useEffect(() => {
    fetchFlights();
  }, []);

  useEffect(() => {
    filterFlights();
  }, [filterBy, flights]);

  useEffect(() => {
    sortFlights();
  }, [sortBy, filteredFlights]);

  const fetchFlights = () => 
  {
    fetch('https://api.npoint.io/378e02e8e732bb1ac55b')
      .then(response => response.json())
      .then(data => {
        setFlights(data);
        //  setFilteredFlights(data);
        
      })
      
      .catch(error => console.error('Error fetching data:', error));
  };

  

  const filterFlights = () => {
    let filtered = flights;
    if (filterBy) {
      filtered = filtered.filter(flight => flight.airline === filterBy);
    }
    if (searchSource && searchDestination) {
      filtered = filtered.filter(flight => flight.origin.toLowerCase() === searchSource.toLowerCase() && flight.destination.toLowerCase() === searchDestination.toLowerCase());
    }
    setFilteredFlights(filtered);
  };

  const sortFlights = () => {
    if (sortBy === 'price') {
      const sorted = [...filteredFlights].sort((a, b) => a.price - b.price);
      setFilteredFlights(sorted);
    }
  };

  const handleFilterChange = (value) => {
    setFilterBy(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleSearch = () => {
    filterFlights();
  };

  return (
    <div className="app">
    <div className="header">
      <div className='header-text'>
          <h1 >Jet Set Go</h1>
      
          <img src={AirlineSVG} alt="herkey-logo" className="logo"/>
          </div>
          <p>Fly Beyond Boundaries: Where Every Journey is an Adventure</p>
      </div>

      <div className="search">
        <div className='filter-sort'>
      <Filter flights={flights} onChange={handleFilterChange} />
      <Sort onChange={handleSortChange} />
      </div>
        <label> Source : </label>
        <input className='input-field' type='text' value={searchSource} onChange={(e) => setSearchSource(e.target.value)} />
        <label> Destination : </label>
        <input className='input-field' type='text' value={searchDestination} onChange={(e) => setSearchDestination(e.target.value)} />
        <button className='button-85' onClick={handleSearch}> Search </button>
      </div>
      
      <FlightList flights={filteredFlights} />
      <Footer />
    </div>
  );
}

export default App;
