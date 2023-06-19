import { useEffect, useState } from 'react';
import { getUsers } from '../firebase/get_users';

function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers().then(setUsersData).catch(console.error);
  }, []);

  return (
    <>
      <h1>!!! Sign Ups !!!</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>WiN</th>
            <th>Spectrum</th>
            <th>Reach</th>
            <th>Emerge</th>
            <th>WFRG</th>
            <th>Embrace</th>
            <th>BBTO</th>
            <th>HKEN</th>
            <th>Support</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.Id}</td>
                <td>{user.ERG1? 'YES' : 'NO'}</td>
                <td>{user.ERG2? 'YES' : 'NO'}</td>
                <td>{user.ERG3? 'YES' : 'NO'}</td>
                <td>{user.ERG4? 'YES' : 'NO'}</td>
                <td>{user.ERG5? 'YES' : 'NO'}</td>
                <td>{user.ERG6? 'YES' : 'NO'}</td>
                <td>{user.ERG7? 'YES' : 'NO'}</td>
                <td>{user.ERG8? 'YES' : 'NO'}</td>
                <td>{user.ERG9? 'YES' : 'NO'}</td>
                <td>{(user.ERG1? 1 : 0)+(user.ERG2? 1 : 0)+(user.ERG3? 1 : 0)+(user.ERG4? 1 : 0)+
                (user.ERG5? 1 : 0)+(user.ERG6? 1 : 0)+(user.ERG7? 1 : 0)+(user.ERG8? 1 : 0)+(user.ERG9? 1 : 0)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Users;
