import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


export default React.createClass({
  getInitialState(){
    return {
      blogPosts: []
    }
  },

  componentWillMount() {
    $.get("http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test5", (response) => {
      this.setState({
        blogPosts: response
      })
    })
  },

  render() {
    var blogsArr = this.state.blogPosts;
    return (
      <div>
        <header className="main__banner">
          <div className="main__bannerOverlay"></div>
          <div className="main__bannerText">
            <h1 className="main__bannerHeader">San Antonio Tech Voices</h1>
            <p className="main__bannerSlogan">"perspectives from San Antonio tech" </p>
          </div>
        </header>
        <main className="article__list">
          {
            blogsArr.map((blog, i) => {
              return <article className="article__previews"
                              key={i} >
                <img src="../assets/images/pexels-photo-61100.jpeg"
                     alt="headshot"
                     className="article__headshot"/>
                <h4 className="article__title"> {blog.title} </h4>
                <p className="article__content">
                  {blog.content}
                </p>
                  <Link to={`/article/${blog._id}`} > Read More... </Link>
              </article>
            })
          }


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
