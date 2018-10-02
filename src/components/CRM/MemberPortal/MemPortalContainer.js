import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MemberPortal from './subcomponents/MemberPortal';

class MemberPortalContainer extends Component {
  render() {
    const { comp: Component, auth } = this.props;
    return(
      <Route
        exact
        path={`${this.props.path}`}
        render={rest => <Component {...this.props}  {...auth} />}
      />
    )
  }
}

export default MemberPortalContainer;