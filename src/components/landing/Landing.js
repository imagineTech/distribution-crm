import React from 'react';

//CSS
import './landing.css';

//Partials
import LandingWrapper from './partials/LandingWrapper';
import TopBanner from './partials/TopBanner';
import BottomContent from './partials/BottomContent';
import BottomComponentsWrapper from './partials/bottomComponents/BottomComponentsWrapper';
import { BecomingAMemberLink } from '../Navigation';
import { HowItWorksLink } from '../Navigation';
import { SoldProducts } from '../Navigation';

const Landing = () => {
  return(
    <LandingWrapper>
      <TopBanner /><br />
      {/* <hr className="line" /> */}
      <BottomComponentsWrapper>
        <BottomContent bottomLinks={<SoldProducts />} images="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b8871553433235948b9931cf8513295&auto=format&fit=crop&w=695&q=80" />
        <BottomContent bottomLinks={<HowItWorksLink />} images="https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de7f7c5a341e5e6a2056f26dcba73687&auto=format&fit=crop&w=500&q=60" />
        <BottomContent bottomLinks={<BecomingAMemberLink />} images="https://images.unsplash.com/photo-1536141248755-a88ad9a2dcab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=490c41bd30d514b86d1639f96b7d66f3&auto=format&fit=crop&w=750&q=80" />
      </BottomComponentsWrapper>
    </LandingWrapper>
  );
};

// Original SoldProducts: https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/07/Global-Halal-Cosmetics-and-Personal-Care-Market-256x256.jpg
// New one: https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b8871553433235948b9931cf8513295&auto=format&fit=crop&w=695&q=80
// Original HowItWorksLink: https://pbs.twimg.com/profile_images/729256218796101632/7lyz7I_x_400x400.jpg
// New one: https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de7f7c5a341e5e6a2056f26dcba73687&auto=format&fit=crop&w=500&q=60
// Original BecomingAMemberLink: https://images.unsplash.com/photo-1536141248755-a88ad9a2dcab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=490c41bd30d514b86d1639f96b7d66f3&auto=format&fit=crop&w=750&q=80
// New one: https://images.unsplash.com/photo-1536141248755-a88ad9a2dcab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=490c41bd30d514b86d1639f96b7d66f3&auto=format&fit=crop&w=750&q=80
// Other: https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2f5a62e9061b2188b383b688e24f2ac&auto=format&fit=crop&w=750&q=80
//        https://cdn.pixabay.com/photo/2016/08/14/15/13/makeup-1593099_960_720.jpg
//        https://cdn.pixabay.com/photo/2016/02/19/11/35/make-up-1209798_960_720.jpg

export default Landing;
