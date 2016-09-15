import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


export default React.createClass({
  getInitialState(){
    return {
      blogPosts: []
    }
  },
  getBlogPosts() {
    $.get("http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test5", (response) => {
      this.setState({
        blogPosts: response
      })
    })
  },
  onMouseEnterHandler(e) {
    var hiddenDetailEl = e.currentTarget.children[0].children[1];

    $(hiddenDetailEl).slideDown(700);
  },
  onMouseExitHandler(e) {
    var hiddenDetailEl = e.currentTarget.children[0].children[1];
    $(hiddenDetailEl).slideUp(700);
  },
  componentWillMount() {
    this.getBlogPosts();
    window.setInterval(() => {
      this.getBlogPosts()
    }, 2000)
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
                              key={i}
                              onMouseEnter={this.onMouseEnterHandler}
                              onMouseLeave={this.onMouseExitHandler}>
                <div className="article__headshotContainer">
                  <img src={blogsArr[i].imgSrc}
                       alt="headshot"
                       className="article__headshot"/>
                  <span className="article__headshotOverlay">
                  <ul className="headshotOverlay__details">
                    <li className="headshotOverlay__item">
                      {blogsArr[i].author}
                    </li>
                    <li className="headshotOverlay__item">
                      {blogsArr[i].timeStamp}
                    </li>
                  </ul>
                 </span>
                </div>
                <div className="article__snippet">
                  <h4 className="article__title">
                    {blog.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{__html: `${blogsArr[i].content}`.substring(0, 259)}}>
                  </div>
                  {// <p className="article__blurb">
                  //   {blogsArr[i].content} ...
                  // </p>
                }
                  <Link to={`/article/${blog._id}`}
                        className="article__readMore">
                    Read More...
                  </Link>
                </div>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="footer__socialMedia">
            <a href="#"
               className="footer__socialMediaLink">
              <i className="fa fa-facebook fa-3x"
                 aria-hidden="true"></i>
            </a>
            <a href="#"
               className="footer__socialMediaLink">
              <i className="fa fa-twitter fa-3x"
                 aria-hidden="true"></i>
            </a>
            <a href="#"
               className="footer__socialMediaLink">
              <i className="fa fa-google fa-3x"
                 aria-hidden="true"></i>
            </a>
          </section>
        </footer>
      </div>
    )
  }
})
