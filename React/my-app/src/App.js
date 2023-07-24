// Date: 2021/4/4
import './App.css';
import User from './Exports/user.js';


function App() {

  const user = new User({
    name: 'John',
    pass: '123456',
    age: 25,
    email: 'John@dev.uk',
    number: 1234567890,
    isEmployed: true
  });


  user.deleteUser();

  
    
  return (
    <div className="App">

    </div>
  );
}

export default App;
