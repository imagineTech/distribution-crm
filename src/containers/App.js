import React, { Component } from 'react';
import { firebase } from '../firebase/index';
// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css';
import '../App.css';
//Font awesome links
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

// import '../node_modules/font-awesome/css/font-awesome.css';

//Custom components
import { Route, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';
import Landing from '../components/landing/Landing';
// import BecomingAMember from '../components/landing/partials/bottomComponents/becomingAMember/BecomingAMember';
// import HowItWorks from '../components/landing/partials/bottomComponents/howItWorks/HowItWorks';
import SoldProducts from '../components/landing/partials/bottomComponents/SoldProducts/SoldProducts';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
// import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import Contact from '../components/Contact/Contact';
import Login from '../components/findoutmore/subcomponents/login/login.js';
import SignUp from '../components/findoutmore/subcomponents/signup/signup.js';
import ForgotPassword from '../components/findoutmore/subcomponents/login/subcomponents/ForgotPassword';
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
  //We have tos et previousLocation as a global var for easy
  //of access
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;
    //This is helping with keeping the background current and not blank
    //when a modal is open
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }


  render() {
    let { authUser, authenticated } = this.state;
    let { location } = this.props;
    // This is to test our componentWillUpdate along
    // with locaiton's hidden state feature
    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div id="main-container">
        <Header auth={authenticated}/>
        {/* We are giving Switch either url location via location or previousLocation */ }
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path={routes.HOME} component={Landing}  />
          <Route path={routes.FIND_OUT_MORE} component={FindoutLanding} />
          <Route path={routes.ABOUT} component={About}  />
          <Route path={routes.OUR_POLICY} component={OurPolicy} />
          <Route path={routes.SIGN_UP} component={SignUp} />
          <Route path={routes.FORGOT_PASS} component={ForgotPassword} />
          <Route path={routes.SOLD_PRODUCTS} component={SoldProducts} />
          {/* <Route path={routes.BECOMING_A_MEMBER} component={BecomingAMember} /> */}
          {/* <Route path={routes.HOW_IT_WORKS} component={HowItWorks} /> */}
        </Switch>
        {/* And once more for the modal to appear */}
        {isModal ? <Route path={routes.CONTACT} component={Contact} /> : null }
        {isModal ? <Route path={routes.SIGN_IN}component={Login} />	: null }

        {/*
          This section below had to be setup because we have different
          components that need to be protected. Using local state right now,
          user is being given to us through firebase
          */}
          {
            authenticated &&
              <Switch>
                <Route path={`${routes.PROFILE}/${routes.EDIT_PROFILE}`} render={rest => <LoadEditPro {...rest} auth={{ authUser, authenticated }} />} />
                <Route path={routes.MEMBER_PORTAL} render={rest => <LoadCRM {...rest} auth={{authUser, authenticated}} />}/>
                <Route path={routes.CART} render={rest => <LoadCart {...rest} auth={{ authUser, authenticated }} /> } />
                <Route path={`${routes.PRODUCTS}/:productId`} render={rest => <LoadProducts {...rest} />} />
                <Route path={`${routes.ORDER_REVIEW}/:orderId`} render={rest => <LoadOrdRvw {...rest} auth={{ authUser, authenticated }} />} />
                <Route path={routes.RECENT_ORDERS} render={rest => <LoadRecentOrders {...rest} /> } />
              </Switch>
          }
          <Footer />
        </div>
      );
    }
  }

  export default withRouter(App);
