import React from "react";

import './TeamList.css'

const TeamList = props => {
  console.log(props);
  return (
    <div className="team-list">
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
            <h3>Name: {member.name}</h3>
            <p>E-mail: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TeamList;
