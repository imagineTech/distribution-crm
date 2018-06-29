import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './partials/Header';
import Container from './partials/Container';
import Wrapper from './partials/Wrapper';

const Landing = () => {
  return(
    <Router>
      <Wrapper>
        <Container>
          <Header />
        </Container>
      </Wrapper>
    </Router>
  );
};

export default Landing;
