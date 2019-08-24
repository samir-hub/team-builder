import React, {useState} from 'react';

import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';

function App() {
  const [members, setMember] = useState([]);
  const addNewMember = member => {
    setMember([...members, member]);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <TeamList memberList={members} />
    </div>
  );
}

export default App;
