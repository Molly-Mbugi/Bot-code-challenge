// BotSpecs.jsx

import React from 'react';

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <div>
      <h2>Bot Specs</h2>
      <div className="bot-specs">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button onClick={() => onEnlist(bot)}>Enlist</button>
        <button onClick={onGoBack}>Go Back</button>
      </div>
    </div>
  );
}

export default BotSpecs;

