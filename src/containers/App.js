import React, { Component } from 'react';
import { firebase } from '../firebase/index';
// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css';
import '../App.css';
//Font awesome links
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

// import '../node_modules/font-awesome/css/font-awesome.css';


//Custom components
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';
import Landing from '../components/landing/Landing';
import BecomingAMember from '../components/landing/partials/bottomComponents/becomingAMember/BecomingAMember';
import HowItWorks from '../components/landing/partials/bottomComponents/howItWorks/HowItWorks';
import SoldProducts from '../components/landing/partials/bottomComponents/SoldProducts/SoldProducts';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
// import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import Contact from '../components/Contact/Contact';
import SignUp from '../components/findoutmore/subcomponents/signup/signup.js';
import Login from '../components/findoutmore/subcomponents/login/login.js';
import ForgotPassword from '../components/findoutmore/subcomponents/login/subcomponents/ForgotPassword';
import ProductPage from '../components/CRM/Product/subcomponents/ProductPage/ProductPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import * as routes from '../constants/routes';

library.add(faStroopwafel, faUser, faEnvelope, faWindowClose)

const LoadProducts = Loadable({
  loader: () => import('../components/CRM/Product/Products'),
  loading: LoadingComponent
})

const LoadCart = Loadable({
  loader: () => import('../components/CRM/Cart/CartContainer'),
  loading: LoadingComponent
})

const LoadEditPro = Loadable({
  loader: () => import('../components/profile/ProfileContainer'),
  loading: LoadingComponent
})

const LoadCRM = Loadable({
  loader: () => import('../components/CRM/MemberPortal/MemPortalContainer'),
  loading: LoadingComponent
})

const LoadRecentOrders = Loadable({
  loader: () => import('../components/CRM/Review/subcomponents/Recent'),
  loading: LoadingComponent
})

const LoadOrdRvw = Loadable({
  loader: () => import('../components/CRM/Review/OrderRvwContainer'),
  loading: LoadingComponent
})

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
        <Header auth={authenticated}/>
        <Route exact path={routes.HOME} component={Landing}  />
        <Route exact path={routes.FIND_OUT_MORE} component={FindoutLanding} />
        <Route exact path={routes.ABOUT} component={About}  />
        <Route exact path={routes.OUR_POLICY} component={OurPolicy} />
        <Route exact path={routes.CONTACT} component={Contact} />
        <Route exact path={routes.SIGN_UP} component={SignUp} />
        <Route exact path={routes.FORGOT_PASS} component={ForgotPassword} />
        <Route exact path={routes.SOLD_PRODUCTS} component={SoldProducts} />
        <Route exact path={routes.BECOMING_A_MEMBER} component={BecomingAMember} />
        <Route exact path={routes.HOW_IT_WORKS} component={HowItWorks} />
        <Footer />
        {/*
          This section below had to be setup because we have different
          components that need to be protected. Using local state right now,
          user is being given to us through firebase
          */}
          {
            authenticated &&
            <div>
              <Route exact path={`${routes.PROFILE}/${routes.EDIT_PROFILE}`} render={rest => <LoadEditPro {...rest} auth={{ authUser, authenticated }} />} />  
              <Route exact path={routes.MEMBER_PORTAL} render={rest => <LoadCRM {...rest} auth={{authUser, authenticated}} />}/>
              <Route exact path={routes.CART} render={rest => <LoadCart {...rest} /> } />
              <Route exact path={`${routes.PRODUCTS}/:productId`} render={rest => <LoadProducts {...rest} />} />  
              <Route exact path={`${routes.ORDER_REVIEW}/:orderId`} render={rest => <LoadOrdRvw {...rest} />} />
              <Route exact path={routes.RECENT_ORDERS} render={rest => <LoadRecentOrders {...rest} /> } />
            </div>
          }
          {/* <Footer /> */}
        </div>
      );
    }
  }

  export default App;
