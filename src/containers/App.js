import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import '../App.css';

//Custom components
import { Route } from 'react-router-dom';
import Crm from './CRM.js'
import Landing from '../components/landing/Landing';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import SignUp from '../components/findoutmore/subcomponents/signup.js';
import Login from '../components/findoutmore/subcomponents/login.js';
import Profile from '../components/profile/ProfileContainer.js';
import EditProfile from '../components/profile/subcomponents/EditProfile';
import Products from '../components/CRM/Product/Products';
import ProductItem from '../components/CRM/Product/subcomponents/ProductItem';
import * as Moltin from '../moltin/index';
import * as routes from '../constants/routes';


class App extends Component {

  state = {
    authUser: null,
    authenticated: false,
    products: []
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({ authUser: user, authenticated: true })
      } else {
        this.setState({ authUser: null })
      }
    })
    Moltin.getAllProducts().then(product => {
      this.setState({ products: this.state.products.concat(product.data)})
    });
  }

  render() {
    const { authUser, products, authenticated } = this.state;
    return (
      <div id="main-container">
        <Route exact path={routes.HOME} component={() => <Landing />}  />
        <Route exact path={routes.FIND_OUT_MORE} component={() => <FindoutLanding />} />
        <Route exact path={routes.ABOUT} component={() => <About />}  />
        <Route exact path={routes.OUR_POLICY} component={() => <OurPolicy />} />
        <Route exact path={routes.CONTACT} component={() => <Contact />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
        <Route exact path={routes.SIGN_IN} component={() => <Login />} />

        {/*
          This section below had to be setup because we have different
          commponents that need to be protected. Using local state right now,
          user is being given to us through firebase
          */}
          {
            authenticated &&
            <div>
              <Route exact path={routes.MEMBER_PORTAL} component={() => <Crm /> }/>
              <Profile auth={{authUser, authenticated}} comp={EditProfile} path={routes.PROFILE} />
              <Products auth={{authUser, authenticated}} comp={ProductItem} path={routes.PRODUCTS} products={products}/>
              {/*
                Since nested routes seemed almost undoable. I had to find a way to get this route
                to talk to the route above. So i just sent over the same state values and did my
                logic in the ProductItem component
                */}

            </div>
          }

        </div>
      );
    }
  }

  export default App;
