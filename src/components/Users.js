import React, { useEffect, useState } from 'react';

import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);

  const updateUser = newUser => {
    const copy = users.map(user => (user.id === newUser.id ? newUser : user));

    setUsers(copy);
  };

  const getData = async () => {
    try {
      const response = await fetch('data/data.json');
      const users = await response.json();

      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return users.map(user => (
    <User key={user.id} user={user} updateUser={updateUser} />
  ));
};

export default Users;
