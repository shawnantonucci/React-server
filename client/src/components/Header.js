import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import styled from "styled-components";

const LinkColor = styled.li`
  color: ${props => props.theme.successColor};
`;

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <LinkColor>
            <a href="/auth/google">Login With Google</a>
          </LinkColor>
        );
      default:
        return [
          <LinkColor key="1"><Payments /></LinkColor>,
          <LinkColor key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </LinkColor>,
          <LinkColor key='2'><a href="/api/logout">Logout</a></LinkColor>
        ];
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
