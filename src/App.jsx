import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotCollection from './components/Bot-collection';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Your Bot Army</Link></li>
        <li><Link to="/collection">Bot Collection</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => {
        setBots(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bot data:', error);
        setLoading(false);
      });
  }, []);

  function handleEnlist(id) {
    const botToAdd = bots.find(bot => bot.id === id);
    setBotArmy(prevArmy => [...prevArmy, botToAdd]);
  }

  function handleRelease(id) {
    setBotArmy(prevArmy => prevArmy.filter(bot => bot.id !== id));
  }

  function handleSort(criteria) {
    setSortBy(criteria);
  }

  const sortedBots = [...bots].sort((a, b) => {
    if (sortBy === 'health') {
      return b.health - a.health;
    } else if (sortBy === 'damage') {
      return b.damage - a.damage;
    } else if (sortBy === 'armor') {
      return b.armor - a.armor;
    } else {
      return 0;
    }
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<YourBotArmy botArmy={botArmy} onRelease={handleRelease} />} />
            <Route path="/collection" element={<BotCollection bots={sortedBots} onEnlist={handleEnlist} />} />
            <Route path="/bots/:botId" element={<BotSpecs />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;




