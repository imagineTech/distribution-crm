import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import '../App.css';
//Font awesome links
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


//Custom components
import { Route } from 'react-router-dom';
import Crm from '../components/CRM/MemberPortal/MemPortalContainer.js'
import Landing from '../components/landing/Landing';
import BecomingAMember from '../components/landing/partials/bottomComponents/becomingAMember/BecomingAMember';
import HowItWorks from '../components/landing/partials/bottomComponents/howItWorks/HowItWorks';
import SoldProducts from '../components/landing/partials/bottomComponents/SoldProducts';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
// import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import Contact from '../components/Contact/Contact';
import SignUp from '../components/findoutmore/subcomponents/signup/signup.js';
import Login from '../components/findoutmore/subcomponents/login/login.js';
import MemberPortal from '../components/CRM/MemberPortal/subcomponents/MemberPortal';
import Profile from '../components/profile/ProfileContainer.js';
import EditProfile from '../components/profile/subcomponents/EditProfile';
import Products from '../components/CRM/Product/Products';
import ProductItem from '../components/CRM/Product/subcomponents/ProductItem';
import Cart from '../components/CRM/Cart/Cart';
import OrderRvw from '../components/CRM/Review/OrderRvwContainer';
import OrderReview from '../components/CRM/Review/subcomponents/OrderReview';
import ProductPage from '../components/CRM/Product/subcomponents/ProductPage/ProductPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import * as routes from '../constants/routes';

library.add(faStroopwafel)

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
    const { storeToTest } = this.props;
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
              {console.log(storeToTest.getState())}
              <Route exact path={routes.CART} render={props => <Cart auth={authUser} {...props}/> }/>
              <Crm auth={{authUser, authenticated}} comp={MemberPortal} path={routes.MEMBER_PORTAL} />
              <Products auth={{authUser, authenticated}} comp={ProductItem} path={routes.PRODUCTS}/>
              <Profile auth={{authUser, authenticated}} comp={EditProfile} path={routes.PROFILE} />
              <OrderRvw auth={{authUser, authenticated}} comp={OrderReview} path={routes.ORDER_REVIEW} />
            </div>
          }
          <Footer />
        </div>
      );
    }
  }

  export default App;
