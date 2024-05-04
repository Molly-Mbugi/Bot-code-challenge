// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './Bot-collection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
  }, []);

  const addToArmy = (bot) => {
    setBotArmy(prevArmy => [...prevArmy, bot]);
    setEnlistedClasses(prevClasses => [...prevClasses, bot.bot_class]);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleFilter = (classFilter) => {
    if (!enlistedClasses.includes(classFilter)) {
      setEnlistedClasses(prevClasses => [...prevClasses, classFilter]);
    }
  };

  const sortedAndFilteredBots = () => {
    let filteredBots = bots;
    if (enlistedClasses.length > 0) {
      filteredBots = filteredBots.filter(bot => enlistedClasses.includes(bot.bot_class));
    }
    if (sortCriteria) {
      filteredBots.sort((a, b) => b[sortCriteria] - a[sortCriteria]);
    }
    return filteredBots;
  };

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <SortBar onSort={handleSort} />
      <BotCollection bots={sortedAndFilteredBots()} addToArmy={addToArmy} enlistedClasses={enlistedClasses} />
      <YourBotArmy army={botArmy} />
    </div>
  );
}

export default App;







