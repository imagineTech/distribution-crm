import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForgotEmail extends Component {
    render() {
        return (
            <form>
                <input type="text" name="forgot_email" onChange={this.handleChange} />
                <button>Send Password Reset Email</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotEmail);