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
              (Orders[Orders.length -1].id) === rest.match.params.orderId ?
                <Component {...this.props} {...rest} />
                :
                <div>
                  <h2>Please wait while we process your order...</h2>
                  <span style={hiddenStyle}>{setTimeout(() => {
                    window.location.reload();
                  }, 1500)}</span>
                </div>
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
