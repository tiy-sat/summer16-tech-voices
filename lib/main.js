import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>San Antonio tech voices</h1>
          <p>"perspectives from San Antonio tech" </p>
        </header>
        <article className="article__previews">
          <img src="" alt="headshot"/>
          <p className="article__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
            <Link to="/article"> Read More </Link>
        </article>
        <article className="article__previews">
          <img src="" alt="headshot"/>
          <p className="article__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
            <Link to="/article"> Read More </Link>
        </article>
        <article className="article__previews">
          <img src="" alt="headshot"/>
          <p className="article__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
            <Link to="/article"> Read More </Link>
        </article>
        <footer>
          <h4>
            About us
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="#"><img src="" alt="social media"/></a>
          <a href="#"><img src="" alt="social media"/></a>
          <a href="#"><img src="" alt="social media"/></a>
        </footer>
      </div>
    )
  }
})
