import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const FormArea = styled.div`
background-color: #ADFF2F;
`;

const TeamForm = props => {

  const [member, setMember] = useState({name: "", email: "", role: ""});
  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value});
  };

  useEffect(() => {
    if(props.memberToEdit) setMember(props.memberToEdit)
  }, [props.memberToEdit])
  

  const submitForm = event => {
    event.preventDefault();
    if(props.memberToEdit) {
        props.editMember(member);
    } else {
    const newMember = {
      ...member,
      key: Date.now()
    };
    props.addNewMember(newMember);
      setMember({name: "", email: "", role: ""});
}
  }

  return (
    <FormArea>
    <form onSubmit ={submitForm}>
      <label htmlFor="name">Member Name</label>
      <input 
      type="text" 
      name="name" 
      placeholder="member name" 
      value={member.name}
      onChange={changeHandler}
      />
      <label htmlFor="email">Member Email</label>
      <input 
      type="text"
      name="email" 
      placeholder="email" 
      value={member.email}
      onChange={changeHandler}
      />
      <label htmlFor="role">Member Role</label>
      <input 
      type="text"
      name="role" 
      placeholder="role" 
      value={member.role}
      onChange={changeHandler}
      />
      <button type ="submit">Add Member</button>
    </form>
    </FormArea>
  );
};

export default TeamForm;