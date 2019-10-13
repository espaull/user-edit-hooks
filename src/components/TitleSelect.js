import React from 'react';
import styled from 'styled-components';

const TitleSelect = ({ currentTitle, updateField }) => {
  const titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'];

  return (
    <Select value={currentTitle} onChange={evt => updateField(evt, 'title')}>
      {titles.map(title => (
        <option key={title} value={title}>
          {title}
        </option>
      ))}
    </Select>
  );
};

export default TitleSelect;

const Select = styled.select`
  margin-left: 15px;
`;
