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
import Profile from './Profile.js';
import EditProfile from '../components/profile/subcomponents/EditProfile';
import ProductItem from '../components/CRM/Product/ProductItem';
import * as Moltin from '../moltin/index';
import * as routes from '../constants/routes';


class App extends Component {

  state = {
    authUser: null,
    products: []
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({ authUser: user })
      } else {
        this.setState({ authUser: null })
      }
    })
    Moltin.getAllProducts().then(product => {
      this.setState({ products: this.state.products.concat(product.data)})
    });
  }

  render() {
    const { authUser } = this.state;
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
              authUser &&
              <div>
                <Route
                  path={routes.MEMBER_PORTAL}
                  render={({ match }) => {
                    return (
                      <div>
                        <Crm products={this.state.products}/>
                        {console.log(match)}
                      </div>
                    );
                  }}
                />
                <Route exact path={routes.PROFILE} component={() => <Profile />} />
                <Route exact path={routes.EDIT_PROFILE} component={() => <EditProfile />} />
              </div>
            }

        </div>
    );
  }
}

export default App;
