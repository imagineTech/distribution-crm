import React from 'react';
import PropTypes from 'prop-types';

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
        <a  href="mailto:office@cilph.com"></a>
      </div>

    </ContentWrapper>
  )
}

TeamContent.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  myPics: PropTypes.string.isRequired
}

export default TeamContent;
