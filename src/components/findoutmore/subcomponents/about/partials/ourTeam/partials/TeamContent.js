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
      <div className="main-description">
        <p>{props.description}</p>
      </div>
      <div className="mail-icon">
        <a  href="mailto:office@cilph.com"><i className="fa fa-envelope mail"></i></a>
      </div>

    </ContentWrapper>
  )
}

export default TeamContent;
