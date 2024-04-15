import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

interface User {
  name: string;
  email: string;
}

const Authentication: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [_accessToken, setAccessToken] = useState<string>('');

  const loginSuccess = (response: GoogleLoginResponse) => {
    console.log(response);
    setIsAuthenticated(true);
    setUser(response.profileObj as User);
    setAccessToken(response.accessToken);
  };

  const loginFailure = (error: GoogleLoginResponseOffline) => {
    console.error('Login failed:', error);
  };

  const logoutSuccess = () => {
    setIsAuthenticated(false);
    setUser(null);
    setAccessToken('');
  };

  return (
    <div style={{padding: "20px 20px 0 20px", textAlign: "right"}}>
      {isAuthenticated ? (
        <div>
          <p>Xin chào, {user?.name}</p>
          <GoogleLogout
            //TODO: update YOUR_GOOGLE_CLIENT_ID to use
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
          />
        </div>
      ) : (
        <GoogleLogin
          //TODO: update YOUR_GOOGLE_CLIENT_ID, single_host_origin to use
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={(response: any) => loginSuccess(response)}
          onFailure={(error: any) => loginFailure(error)}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default Authentication;
