import React from 'react';

//partials
import TeamContent from './partials/TeamContent';

//CSS
import './OurTeam.css';

const OurTeam = () => {
  return(
    <div>
      <h1 className="team-heading">MEET THE TEAM</h1>
      <div className='team-container'>
        <TeamContent
        description="As the Chief Operating Officer, I make sure that the company's core procedures, and values are always met, and embodied. I also provide our staff with any resources they might need in order to succeed in their tasks. I love to learn, and to teach. It is my belief that my calling is to help those around me, reach their highest potential!"
        title="Chief Operating Officer" name="Jahaziel (Jay) Vazquez" myPics="http://www.ffwa.eu/ff7/images/char_cloud.gif" />
        <TeamContent
        description="As the founder and CEO of Kupido Wholesale LLC, I have learned to seek the best in every one of my team members. My vision is to provide satisfying and fulfilling careers to those around me. I'm passionate about people, and business. I believe that integrity, work ethic, and a problem solving attitude is the key to all success in life!"
        title="Chief Executive Officer" name="Karen Ovares" myPics="http://www.ffwa.eu/ff7/images/char_tifa.gif" />
        <TeamContent
        description="I have always been passionate about Marketing. I love to research and to find answers to complicated questions. My goal is to help small businesses grow. What first drew me to Kupido Wholesale LLC was their integrity and hard work, but what I wasn't expecting was that I was going to find a family here!"
        title="Head of Marketing" name="Ronny Guzman" myPics="https://twitter.com/RonnyGzuman" />
      </div>
    </div>
  )
}

export default OurTeam;
