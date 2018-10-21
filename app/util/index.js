import React from 'react';

export function getUserList(users) {
    // console.log(users)
      return(
        users.map((user) => { return(
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.height}</td>
        </tr>
        )})
      )
  }