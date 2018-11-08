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
        <ContentContainer>
          <Content title="Product Offer Priority" description="As you'll notice, we're very selective with our client base. The purpose for this is to ensure that we do not saturate the market with too much competition. We also want to provide the best possible service. We consider every one of our clients a business partner. Because of these reasons, we do not favor one client over another. Only our registered clients are allowed to purchase product from us, and our products are sold on a first come first serve basis." /><hr />
          <Content title="Notification System" description="As long as you're a registered member, you will receive a text notification every time we post a new product, which will include an image of the product we're offering. If you would like to see all product details, or have an interest in purchasing it, you can simply log into your account, and follow the instructions on your dashboard. Once you choose to purchase the product, it will be taken off the market, and only you will have access to it." /><hr />
          <Content title="Client Identity Protection" description="We understand the nature of confidentiality in this business, as such we will not disclose the identity of our clients to other clients within our network, so you don't have to worry about your information being shared!" />
        </ContentContainer>
        <ImageContainer>
          <Image />
          <p>Our members enjoy exclusive rights such as having first hand knowledge of our most profitable products, a direct line of communication with our team of specialists, and absolute bottom line pricing without the need to ask for it! </p><br />
          <BecomingAMemberInstructionsLink /><br /><br />
          <RegistrationRedirection />
        </ImageContainer>
      </HowItWorksWrapper>
    </div>
  )
}



export default HowItWorks;
