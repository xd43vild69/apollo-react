import React from 'react';
const Course = (props) => (    
    <div key={props.allUsers.id}>
        <p>{`${props.allUsers.id} by ${props.allUsers.name}`}</p>
    </div>
);
export default Course;