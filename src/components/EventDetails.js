// EventDetails.js
import React from 'react';

function EventDetails({ event }) {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
    </div>
  );
}

export default EventDetails;
