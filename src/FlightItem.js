import React from 'react';
import './App.css'

function FlightItem({ flight }) {
  const [date, time] = flight.arrivalTime.split("T");
  return (
    
    <div className="flight-item">
      <span>
      <p>Airline : {flight.airline}</p>
      <p>|</p>
      <p>Flight Number: {flight.flightNumber}</p>
      
      </span>
      <span>
      <p>Origin: {flight.origin}</p>
      <p>|</p>
      <p>Destination: {flight.destination}</p>
      </span>
      <span>
      
      <p>Date : {date}</p>
      <p>|</p>
      <p>Time : {time}</p>
      </span>
      <span>
      <p>Price: {flight.price}</p>
      <p>|</p>
      <p>Duration : {flight.duration}</p>
      </span>
    </div>
  );
}

export default FlightItem;
