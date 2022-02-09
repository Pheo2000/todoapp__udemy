import './App.css';
import { useState, Fragment } from 'react';
import AddUser from './component/Users/Addusers';
import Userslist from './component/Users/Userslist';
function App() {


  const [userList, setuserList] = useState([])
  const addUserHandler = (uname, uAge) => {
    setuserList(prevUserList => {
      return [...prevUserList, { name: uname, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <Fragment>
      <AddUser onAdduser={addUserHandler} />
      <Userslist users={userList} />
    </Fragment>
  );
}

export default App;
