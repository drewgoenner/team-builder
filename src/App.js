import React, {useState} from 'react';
import TeamMates from './components/TeamMates';
import TeamForm from './components/TeamForm';
import data from './data';
import './App.css';


function App() {
  const [members, setMembers] = useState(data)
  const addNewMember = member => {
    setMembers([...members, member]);
  };
  return (
    
    <div className="App">
      <h1>Team Members</h1>
      <TeamForm addNewMember={addNewMember} />
      <TeamMates teamList={members} />
    </div>
  );
}

export default App;
