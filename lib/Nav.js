import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="nav__wrapper">
          <nav className="nav">
            <div className="nav__logo">
              <Link to="/">
                <img src="../assets/images/sa-tech-voices.jpg"
                     alt="SATV logo"
                     className="nav__linkLogo"/>
              </Link>
            </div>
            <div className="nav__links">
              <Link to="/"
                    className="nav__link home">
                    home
              </Link>
              <a href="#aboutUs"
                 className="nav__link about">
                About Us
              </a>
              <Link to="/new-article"
                    className="nav__link create">
                    create
              </Link>
            </div>
          </nav>
        </div>
        { this.props.children }
      </div>
    )
  }
})
