import React from 'react'
import { Link } from 'react-router'

// <img className="logo"
//      src="#"
//      alt="Logo"/>

export default React.createClass({
  render() {
    return (
      <div className="nav__wrapper">
        <nav className="nav">
          <div className="nav__logo">
            <Link to="/"
                  className="nav__link">
              <img src="#"
                   alt="SATV logo"
                   className="nav__linkLogo"/>
            </Link>
          </div>
          <div className="nav__links">
            <Link to="/"
                  className="nav__link">
                  home
            </Link>
            <Link to="/new-article"
                  className="nav__link">
                  create
            </Link>
            <button className="googleSignUp">
              Sign in with Google
            </button>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
})
