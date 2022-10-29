import React from 'react';
import './App.css';
import { Authenticator} from '@aws-amplify/ui-react';

function App() {
  return (
    <Authenticator>
{({signOut, user})=>(
  <div className="App">
    <p>
      Hey {user.username}, welcome to my channel, with auth!
    </p>
    <button onClick={signOut}>Sign out</button>
  </div>
)}
    </Authenticator>
    
  );
}

export default App;


