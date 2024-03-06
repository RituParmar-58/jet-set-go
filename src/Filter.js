import React from 'react';
import './App.css'

function Filter({ flights, onChange }) {
  const uniqueAirlines = [...new Set(flights.map(flight => flight.airline))];

  return (
    <div className="filter">
      <label>Airline:</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">All Airlines</option>
        {uniqueAirlines.map(airline => (
          <option key={airline} value={airline}>{airline}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
