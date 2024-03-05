// Timeline.js
import React from 'react';
import eventsData from '../data/eventsData'; // Sample data for space and astronomy events
import './Timeline.css'; // Import the Timeline component CSS

function Timeline() {
  return (
    <div>
      
      <ul className="timeline">
        {eventsData.map(event => (
          <li key={event.id} style={{ '--accent-color': event.accentColor }}>
            <div className="date">{event.year}</div>
            <div className="title">{event.title}</div>
            <div className="descr">{event.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
