import React from 'react';
import {connect} from 'react-redux';
import {loginStartAction} from '../../actions/login.action';
import FormComponent from './form.component';
import {autobind} from 'core-decorators';
import './login.css';
import logoImage from '../../../assets/svgs/logo.svg';

@connect(state => ({
  auth: state.auth,
  ...state.login
}))
class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  @autobind()
  loginHandler(username, password) {
    this.props.dispatch(loginStartAction(username, password)).then( () => {
      this.context.router.push('/');
    });
  }

  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo">
            <img src={logoImage} alt="logo" style={{maxWidth: 160}} />
          </div>
          <FormComponent loginHandler={this.loginHandler}
            loading={this.props.loading} />
        </div>
      </div>
    );
  }
}

export default Login;
