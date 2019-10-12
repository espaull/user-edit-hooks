import React, { useState } from 'react';
import styled from 'styled-components';

import UserSummary from './UserSummary';
import UserEdit from './UserEdit';

const User = ({ user, updateUser }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <UserContainer>
      {!editMode ? (
        <>
          <UserSummary user={user} />
          <button onClick={toggleEditMode}>Edit</button>
        </>
      ) : (
        <UserEdit
          user={user}
          updateUser={updateUser}
          toggleEditMode={toggleEditMode}
        />
      )}
    </UserContainer>
  );
};

const UserContainer = styled.div`
  margin-bottom: 45px;
`;

export default User;
