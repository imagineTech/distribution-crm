import React, { Component } from 'react';
import { loadOrder } from '../../../actions/orderData';
import { Route } from 'react-router';
import { connect } from 'react-redux';

class OrderRvwContainer extends Component {

  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder((Orders[Orders.length - 1]).id);
  }

  render() {
    const { path, auth, comp: Component } = this.props;
    return(
      <div>
        <Route
          exact
          path={`${path}/:orderId`}
          render={rest => auth.authenticated ? <Component {...this.props} {...rest} /> : <p>Please Login</p> }
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    orderData: state.loadingOrderData,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: (ordId) => dispatch(loadOrder(ordId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);
