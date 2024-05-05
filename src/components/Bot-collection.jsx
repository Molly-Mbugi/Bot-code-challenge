import React from 'react';

function BotCollection({ bots, onDisplayBotInfo, onEnlist }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <div key={bot.id} className="bot-profile">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <button onClick={() => onEnlist(bot.id)}>Enlist</button> {/* Ensure that onEnlist is used as the onClick handler */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection





