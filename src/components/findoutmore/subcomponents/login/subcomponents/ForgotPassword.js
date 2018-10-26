import React, { Component } from 'react';
import { sendPasswordResetEmail } from '../../../../../actions/profileData';
import { connect } from 'react-redux';

class ForgotEmail extends Component {

    state = {
        email: ""
    }

    change = e => {
        this.setState({
            email: e.target.value
        })
    }

    submit = e => {
        const { email } = this.state;
        const { sendPassResetEmail } = this.props;
        e.preventDefault();
        this.setState({ email: "" })
        sendPassResetEmail(email)
    }

    render() {
        const { email } = this.state;
        const { success } = this.props;
        const sent = success.display ? success.message : null;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name="forgot_email" value={email} onChange={this.change} />
                    <button>Send Password Reset Email</button>
                </form>
                <p>{sent}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        success: state.passwordResetSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendPassResetEmail: email => dispatch(sendPasswordResetEmail(email)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotEmail);