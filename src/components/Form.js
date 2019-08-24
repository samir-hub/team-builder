import React, { useState } from "react";

import './Form.css'

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: ""});
  const changeHandler = event => {
   
    console.log(event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({ name: "", email: "", role: ""});
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={member.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">E-mail: </label>
      <input
        name="email"
        placeholder="e-mail"
        value={member.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role: </label>
      <input
        type="text"
        name="role"
        placeholder="role"
        value={member.role}
        onChange={changeHandler}
      />
      <button type="submit">Add member</button>
    </form>
  );
};

export default Form;