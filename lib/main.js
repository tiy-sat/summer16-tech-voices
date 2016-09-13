import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <header className="main__banner">
          <div className="main__bannerOverlay"></div>
          <div className="main__bannerText">
            <h1 className="main__bannerHeader">San Antonio tech voices</h1>
            <p className="main__bannerSlogan">"perspectives from San Antonio tech" </p>
          </div>
        </header>
        <main className="article__list">
          // <article className="article__previews">
          //   <img src="" alt="headshot" className="article__headshot"/>
          //   <p className="article__content">
          //     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          //   </p>
          //     <Link to="/article"> Read More... </Link>
          // </article>
        </main>
        <footer className="footer">
          <section className="footer__aboutUs">
            <h4 className="footer__heading">
              About us
            </h4>
            <p className="footer__aboutText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="footer__socialMedia">
            <a href="#" className="footer__socialMediaLink"><img src="" alt="social media"/></a>
            <a href="#" className="footer__socialMediaLink"><img src="" alt="social media"/></a>
            <a href="#" className="footer__socialMediaLink"><img src="" alt="social media"/></a>
          </section>
        </footer>
      </div>
    )
  }
})
