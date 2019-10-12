import React, { useEffect, useState } from 'react';

import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);

  const updateUser = user => {
    const copy = users.slice();

    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === user.id) {
        copy[i] = user;
      }
    }

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
