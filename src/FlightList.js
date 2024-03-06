import React from 'react';
import FlightItem from './FlightItem';
import './App.css'

function FlightList({ flights }) {
  return (
    <div className="flight-list">
      {flights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default FlightList;
