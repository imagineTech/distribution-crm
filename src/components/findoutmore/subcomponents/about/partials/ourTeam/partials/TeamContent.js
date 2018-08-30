import React from 'react';

//partials
import ContentWrapper from './ContentWrapper';

//CSS
import '../OurTeam.css';


const TeamContent = (props) => {
  return(
    <ContentWrapper>
      <img className="main-pics" src={props.myPics} />
      <h2>{props.name}</h2>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </ContentWrapper>
  )
}

export default TeamContent;
