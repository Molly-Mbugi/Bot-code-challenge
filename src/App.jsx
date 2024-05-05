import React, { useEffect, useState } from 'react';
import BotCollection from './components/Bot-collection';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [botArmy, setBotArmy] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bot data:', error));
  }, []);

  function handleDisplayBotInfo(id) {
    setSelectedBot(bots.find(bot => bot.id === id));
  }

  function handleGoBack() {
    setSelectedBot(null);
  }

  function handleEnlist(id) {
    const botToAdd = bots.find(bot => bot.id === id);
    setBotArmy(prevArmy => [...prevArmy, botToAdd]);
    setBots(prevBots => prevBots.filter(bot => bot.id !== id));
  }

  function handleRelease(id) {
    setBotArmy(prevArmy => prevArmy.filter(bot => bot.id !== id));
  }

  function handleDischarge(id) {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBotArmy(prevArmy => prevArmy.filter(bot => bot.id !== id));
      setBots(prevBots => prevBots.filter(bot => bot.id !== id));
    })
    .catch(error => console.error('Error discharging bot:', error));
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
    <div className="App">
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onGoBack={handleGoBack}
          onEnlist={handleEnlist}
          onDischarge={handleDischarge}
        />
      ) : (
        <>
          <YourBotArmy botArmy={botArmy} onRelease={handleRelease} />
          <SortBar onSort={handleSort} />
          <BotCollection
            bots={sortedBots}
            onDisplayBotInfo={handleDisplayBotInfo}
            onEnlist={handleEnlist} 
          />
        </>
      )}
    </div>
  );
}

export default App;













