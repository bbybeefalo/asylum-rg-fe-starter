import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="logbutton" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
}

export default LoginButton;
