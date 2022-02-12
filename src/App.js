import {useState} from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import FirebaseAuthService from './FirebaseAuthService';




function App() {
  const [user, setUser] = useState(null)
  FirebaseAuthService.subscribeToAuthChanges(setUser)
  console.log(user)
  return (
    <div className="App">
     <div className="title-row">
       <h1 className="title">Hi how are you !!</h1>
       <LoginForm existingUser={user}></LoginForm>
       
     </div>
    
    </div>
  );
}

export default App;
