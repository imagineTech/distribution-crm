import React from 'react';

import Header from './partials/Header';
import Container from './partials/Container';
import Wrapper from './partials/Wrapper';

//Main landing component
//Contains all components related to the landing page.
const Landing = () => {
  return(
    <Wrapper>
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
};

export default Landing;
