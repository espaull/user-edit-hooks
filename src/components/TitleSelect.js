import React from 'react';

const TitleSelect = ({ currentTitle, updateField }) => {
  const titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'];

  return (
    <select value={currentTitle} onChange={evt => updateField(evt, 'title')}>
      {titles.map(title => (
        <option key={title} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default TitleSelect;
