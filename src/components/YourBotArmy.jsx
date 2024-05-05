// YourBotArmy.jsx

import React from 'react';

function YourBotArmy({ botArmy, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {botArmy.map(bot => (
          <div key={bot.id} className="bot-profile">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => onRelease(bot.id)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

