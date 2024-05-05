// FilterBar.jsx

import React from 'react';

function FilterBar({ classes, selectedClasses, onClassSelect }) {
  const handleClassSelect = (classType) => {
    onClassSelect(classType);
  };

  return (
    <div>
      <h2>Filter by Class</h2>
      {classes.map((classType) => (
        <label key={classType}>
          <input
            type="checkbox"
            value={classType}
            checked={selectedClasses.includes(classType)}
            onChange={() => handleClassSelect(classType)}
          />
          {classType}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;

;
