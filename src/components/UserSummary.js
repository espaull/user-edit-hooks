import React from 'react';
import styled from 'styled-components';

const UserSummary = ({ user }) => (
  <>
    <UserInfo>{`${user.title} ${user.firstName} ${user.lastName}`}</UserInfo>
    <UserInfo>{user.dob}</UserInfo>
  </>
);

export default UserSummary;

const UserInfo = styled.p`
  color: #fff;
`;
