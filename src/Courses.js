import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from './Course';

const GETDATA1 = gql`query {
  allUsers {
    id
    name
  }
}  

`

const Courses = () => (
  <Query query={GETDATA1} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;        
      
      return data.allUsers.map(({ id,name }) => (        
        <div>${name}</div> // <Course course={allUsers} />                
      ));
      

    }}
  </Query>
);

export default Courses;