'use strict';

function UserList() {
  const [state, setState] = React.useState({
    users: [
      {
        id: 1,
        userName: 'RyanVice',
        email: 'ryan@vicesoftware.com'
      },
      {
        id: 2,
        userName: 'AdamHorton',
        email: 'digitalicarus@gmail.com'
      }
    ]
  });

  const users = state.users.map(user => {
    return (
      <UserRow key={user.id} user={user} />
    );
  });

  return (
    <table className='table table-dark table-hover table-bordered border-primary'>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {users}
      </tbody>
    </table>
  );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<UserList />, domContainer);
