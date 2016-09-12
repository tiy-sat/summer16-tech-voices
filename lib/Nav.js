import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <nav>
          <img className="logo"
               src="#"
               alt="Logo"/>
          <Link to="/"
                className="nav__link">
                home
          </Link>
          <Link to="/new-article"
                className="nav__link">
                create
          </Link>
          <button className="googleSignUp">
                  Sign in/sign up with Google
          </button>
        </nav>
        { this.props.children }
      </div>
    )
  }
})
