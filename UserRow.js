'use strict';

function UserRow({user}) {
  return (
    <tr>
      <td>{user.userName}</td>
      <td><a href={'mailto:' + user.email}>{user.email}</a></td>
    </tr>
  );
}
