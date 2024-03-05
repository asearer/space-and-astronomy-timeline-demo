// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import EventDetails from './components/EventDetails';
import About from './components/About';
import eventsData from './data/eventsData';
import NotableFigures from './components/NotableFigures';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Space and Astronomy Timeline</h1>
                <Timeline events={eventsData} onSelectEvent={handleEventSelect} />
                {selectedEvent && <EventDetails event={selectedEvent} />}
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/notable-figures" element={<NotableFigures />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
