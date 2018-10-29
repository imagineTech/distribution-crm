import React from 'react';

//partials
import ContentWrapper from './ContentWrapper';

//CSS
import '../OurTeam.css';


const TeamContent = (props) => {
  return(
    <ContentWrapper>

      <img className="main-pics" src={props.myPics} />
      <h2 style={{margin: 0}}>{props.name}</h2>
      <p style={{margin: 0, marginBottom: '20px'}}>{props.title}</p>
      <div className="main-description">
        <p style={{margin: 0}}>{props.description}</p>
      </div>
      <div className="mail-icon">
        <a  href="mailto:office@cilph.com"></a>
      </div>
    </ContentWrapper>
  )
}

export default TeamContent;
