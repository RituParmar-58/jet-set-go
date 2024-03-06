import React from 'react';

function Sort({ onChange }) {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" onChange={(e) => onChange(e.target.value)}>
        <option value="">Default</option>
        <option value="price">Lowest to Highest</option>
      </select>
    </div>
  );
}

export default Sort;
