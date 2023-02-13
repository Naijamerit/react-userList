import React from 'react';
import './style.css';
import Users from './Component/UserList';

export default function App() {
  const userData = Users;
  const UserList = userData.map((getUser) => {
    return (
      <div
        style={{
          display: 'flex',
          width: '30%',
          border: 'solid',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          margin: '2opx',
        }}
      >
        <div>
          <img src={getUser.image} width="90" />
        </div>
        <div key={getUser.id}>
          <p>First Name: {getUser.firstName}</p>
          <p>Last Name: {getUser.lastName}</p>
          <p>Date Of Birth: {getUser.birthDate}</p>
          <p>Gender: {getUser.gender}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>My User List</h3>
      {UserList}
    </div>
  );
}
