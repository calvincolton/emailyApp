import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeWrapper from './StripeWrapper';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Log in with Google</a></li>
        );
      default:
        return [
          <li key="stripeWrapper"><StripeWrapper /></li>,
          <li key="logout"><a href="/api/logout">Log out</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
// the above mapStateToProps function is the same as:
// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

export default connect(mapStateToProps)(Header);
