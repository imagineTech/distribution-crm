import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import '../App.css';

//Custom components
import { Route } from 'react-router-dom';
import Crm from './CRM.js'
import Landing from '../components/landing/Landing';
import BecomingAMember from '../components/landing/partials/bottomComponents/BecomingAMember';
import HowItWorks from '../components/landing/partials/bottomComponents/howItWorks/HowItWorks';
import SoldProducts from '../components/landing/partials/bottomComponents/SoldProducts';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
// import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import Contact from '../components/Contact/Contact';
import SignUp from '../components/findoutmore/subcomponents/signup.js';
import Login from '../components/findoutmore/subcomponents/login.js';

import Profile from '../components/profile/ProfileContainer.js';
import EditProfile from '../components/profile/subcomponents/EditProfile';
import Products from '../components/CRM/Product/Products';
import ProductItem from '../components/CRM/Product/subcomponents/ProductItem';
import Cart from '../components/CRM/Cart/Cart';
import ProductPage from '../components/CRM/Product/subcomponents/ProductPage/ProductPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import * as routes from '../constants/routes';


class App extends Component {

  state = {
    authUser: null,
    authenticated: false
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({ authUser: user, authenticated: true })
      } else {
        this.setState({ authUser: null })
      }
    })

  }


  render() {
    const { authUser, authenticated } = this.state;
    return (
      <div id="main-container">
        <Header />
        <Route exact path={routes.HOME} component={() => <Landing />}  />
        <Route exact path={routes.FIND_OUT_MORE} component={() => <FindoutLanding />} />
        <Route exact path={routes.ABOUT} component={() => <About />}  />
        <Route exact path={routes.OUR_POLICY} component={() => <OurPolicy />} />
        <Route exact path={routes.CONTACT} component={() => <Contact />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
        <Route exact path={routes.SIGN_IN} component={() => <Login />} />
        <Route exact path={routes.PRODUCTS} component={() => <ProductItem />} />
        <Route exact path={routes.SOLD_PRODUCTS} component={() => <SoldProducts />} />
        <Route exact path={routes.BECOMING_A_MEMBER} component={() => <BecomingAMember />} />
        <Route exact path={routes.HOW_IT_WORKS} component={() => <HowItWorks />} />

        {/*
          This section below had to be setup because we have different
          commponents that need to be protected. Using local state right now,
          user is being given to us through firebase
          */}
          {
            authenticated &&
            <div>
              <Route exact path={routes.MEMBER_PORTAL} component={() => <Crm /> }/>
              <Route exact path={routes.CART} render={() => <Cart auth={authUser}/> }/>
              <Profile auth={{authUser, authenticated}} comp={EditProfile} path={routes.PROFILE} />
              <Products auth={{authUser, authenticated}} comp={ProductItem} path={routes.PRODUCTS} />
              {/*
                Since nested routes seemed almost undoable. I had to find a way to get this route
                to talk to the route above. So i just sent over the same state values and did my
                logic in the ProductItem component
                */}

            </div>
          }
          <Footer />
        </div>
      );
    }
  }

  export default App;
