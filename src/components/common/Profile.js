import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 'auto',
        width: '50%',
        paddingTop: '25px',
      }}
    >
      <img style={{ height: '120px', paddingLeft: '25%' }} src={user.picture} />
      <div style={{ width: '50%', paddingLeft: '25px' }}>
        <h2
          style={{
            fontSize: '2.5rem',
          }}
        >
          {user.name}
        </h2>
        <p
          style={{
            fontSize: '1.4rem',
          }}
        >
          {user.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
