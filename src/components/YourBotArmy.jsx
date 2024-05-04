// YourBotArmy.js
import React from 'react';

function YourBotArmy({ army, dischargeFromArmy }) {
  const handleDischarge = (bot) => {
    dischargeFromArmy(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {/* Render the enlisted bots */}
        {army.map(bot => (
          <div key={bot.id} className="enlisted-bot">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            {/* Button to discharge the bot */}
            <button onClick={() => handleDischarge(bot)} className="discharge-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;



