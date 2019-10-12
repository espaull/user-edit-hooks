import React, { useState } from 'react';
import styled from 'styled-components';

import TitleSelect from './TitleSelect';

const UserEdit = ({ toggleEditMode, user, updateUser }) => {
  const [userData, setUserData] = useState({ ...user });

  const updateField = (evt, property) => {
    setUserData({ ...userData, [property]: evt.target.value });
  };

  const saveUser = evt => {
    evt.preventDefault();

    updateUser(userData);
    toggleEditMode();
  };

  return (
    <form onSubmit={saveUser}>
      <Label>
        Title
        <TitleSelect currentTitle={userData.title} updateField={updateField} />
      </Label>
      <Label>
        First name
        <Input
          type="text"
          value={userData.firstName}
          onChange={evt => updateField(evt, 'firstName')}
        />
      </Label>
      <Label>
        Last name
        <Input
          type="text"
          value={userData.lastName}
          onChange={evt => updateField(evt, 'lastName')}
        />
      </Label>
      <button type="submit">Save</button>
    </form>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #fff;
`;

const Input = styled.input`
  margin-left: 15px;
`;

export default UserEdit;
