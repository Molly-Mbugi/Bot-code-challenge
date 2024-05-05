import React from 'react';

function SortBar({ onSort }) {
  return (
    <div className="sort-bar">
      <span>Sort By:</span>
      <button onClick={() => onSort('health')}>Health</button>
      <button onClick={() => onSort('damage')}>Damage</button>
      <button onClick={() => onSort('armor')}>Armor</button>
    </div>
  );
}

export default SortBar;





