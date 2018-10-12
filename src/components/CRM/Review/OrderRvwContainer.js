import React, { Component } from 'react';
import { loadOrder } from '../../../actions/orderData';
import { Route } from 'react-router';
import { connect } from 'react-redux';

class OrderRvwContainer extends Component {

  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder(Orders[Orders.length - 1].id);

  }

  render() {
    const hiddenStyle = {
      display: "none"
    }
    const { path, auth, comp: Component, profileData } = this.props;
    const { Orders } = profileData;
    return(
      <div>
        <Route
          exact
          path={`${path}/:orderId`}
          render={rest => {
            return(
              auth.authenticated ?
                <Component {...this.props} {...rest} />
              :
              <p>Please Login</p>
            )
          }}
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { data } = state.loadingOrderData;
  return {
    orderData: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: (ordId) => dispatch(loadOrder(ordId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);
