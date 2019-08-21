import React, {useState} from 'react';
import TeamMates from './components/TeamMates';
import TeamForm from './components/TeamForm';
import data from './data';
import styled from 'styled-components';
import './App.css';

const Team = styled.h1`
color: blue;
background-color: green;
`;


function App() {
  const [members, setMembers] = useState(data)
  const [memberToEdit, setMemberToEdit] = useState(null)
  const addNewMember = member => {
    setMembers([...members, member]);
  };
  
  const editMember = editedMember => {
    const newMembers = members.map(member => member.key === editedMember.key ? editedMember : member)
    setMembers(newMembers)
    setMemberToEdit();
    }
  
  
  return (
    
    <div className="App">
      <Team>Team Members</Team>
      <TeamForm addNewMember={addNewMember} editMember={editMember} memberToEdit={memberToEdit}/>
      <TeamMates teamList={members} setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} />
    </div>
  );
  };

export default App;
