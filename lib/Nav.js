import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="nav">
          <img className="logo"
               src="#"
               alt="Logo"/>
          <div className="nav__links">
            <Link to="/"
                  className="nav__link">
                  home
            </Link>
            <Link to="/new-article"
                  className="nav__link">
                  create
            </Link>
          </div>
          <button className="googleSignUp">
            Sign in with Google
          </button>
        </nav>
        { this.props.children }
      </div>
    )
  }
})
