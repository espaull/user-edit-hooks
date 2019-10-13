import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styled from 'styled-components';

dayjs.extend(customParseFormat);

const DateSelect = ({ currentDob, updateField }) => {
  const datePickerFormat = 'YYYY-MM-DD';
  const formattedDob = dayjs(currentDob, 'DD/MM/YYYY').format(datePickerFormat);
  const now = dayjs().format(datePickerFormat);
  const thePast = dayjs()
    .subtract(100, 'year')
    .format(datePickerFormat);

  const updateDob = evt => {
    const updatedDob = dayjs(evt.target.value).format('DD/MM/YYYY');

    updateField(evt, 'dob', updatedDob);
  };

  return (
    <DateInput
      type="date"
      value={formattedDob}
      onChange={evt => updateDob(evt)}
      min={thePast}
      max={now}
    />
  );
};

export default DateSelect;

const DateInput = styled.input`
  margin-left: 15px;
`;
