import React, { Component } from 'react';
import { connect } from 'react-redux';
import authReducer from '../reducers/authReducer';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a className="left brand-logo">
                            Emaily
                        </a>
                        <ul className="right">
                            <li>
                                <a>Login With Google</a>
                            </li>
                        </ul>
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