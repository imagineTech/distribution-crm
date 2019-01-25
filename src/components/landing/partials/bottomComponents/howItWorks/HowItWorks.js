import React from 'react';

//partials
import HowItWorksWrapper from './partials/HowItWorksWrapper';
import ContentContainer from './partials/ContentContainer';
import Content from './partials/Content';
import ImageContainer from './partials/ImageContainer';
import Image from './partials/Image';
import { BecomingAMemberInstructionsLink } from '../../../../Navigation';
import { RegistrationRedirection } from '../../../../Navigation';

const HowItWorks = () => {
  return(
    <div>
      <HowItWorksWrapper>
        {/* <ContentContainer> */}
          <Content title="Product Offer Priority" description="As you'll notice, we're very selective with our client base. The purpose for this is to ensure that we do not saturate the market with too much competition. We also want to provide the best possible service. We consider every one of our clients a business partner. Because of these reasons, we do not favor one client over another. Only our registered clients can purchase products from us, and our products are sold on a first come first serve basis." />
          <Content title="Notification System" description="Registered members will receive a text notification for each new product posted (including title and image). To see all product details or make a purchase, simply log into your account and follow the instructions on the dashboard. If you choose to purchase the product, it will be taken off the market and only you will have access to it." />
          <Content title="Client Identity Protection" description="Global Trade Deals understands the nature of confidentiality in this business and will not disclose the identity of its clients to other clients within its network, so you don't have to worry about your information being shared!" />
        {/* </ContentContainer> */}
        <ImageContainer>
          {/* <Image /> */}
          {/* <BecomingAMemberInstructionsLink /> */}
          {/* <RegistrationRedirection /> */}
        </ImageContainer>
      </HowItWorksWrapper>
    </div>
  )
}



export default HowItWorks;
