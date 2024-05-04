// BotCollection.js
import React from 'react';

function BotCollection({ bots, addToArmy, enlistedClasses }) {
  const handleEnlist = (bot) => {
    if (!enlistedClasses.includes(bot.bot_class)) {
      addToArmy(bot);
    }
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {/* Render the bots */}
        {bots.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => handleEnlist(bot)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;


