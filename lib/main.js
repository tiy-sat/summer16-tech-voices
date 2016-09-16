import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
import GoogleLogin from 'react-google-login'
const responseGoogle = (response)=>{
$.ajax({
      type: "GET",
      url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.tokenId}`,
      contentType: "application/json",
      success: (response) => {
        var stringifiedGoogleResponse = JSON.stringify(response)
        $.ajax({
          type: "POST",
          url: "http://tiny-tiny.herokuapp.com/collections/sa_tech_userdata_test2",
          data: stringifiedGoogleResponse,
          contentType: "application/json",
        })
      },
    })
  }
export default React.createClass({
  getInitialState(){
    return {
      blogPosts: [],
      tokenId: ""
    }
  },
  getBlogPosts() {
    $.get("http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test9", (response) => {
      this.setState({
        blogPosts: response
      })
    })
  },
  onMouseEnterHandler(e) {
    var hiddenDetailEl = e.currentTarget.children[0].children[1];

    $(hiddenDetailEl).slideDown(400);
  },
  onMouseExitHandler(e) {
    var hiddenDetailEl = e.currentTarget.children[0].children[1];
    $(hiddenDetailEl).slideUp(100);
  },
  componentWillMount() {
    this.getBlogPosts();
    window.setInterval(() => {
      this.getBlogPosts()
    }, 2000)
  },
  signOut() {
   var auth2 = gapi.auth2.getAuthInstance();
   auth2.signOut().then(function () {
     console.log('User signed out.');
   });
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
              return <Link to={`/article/${blog._id}`}>
              <article className="article__previews"
                              key={i}
                              onMouseEnter={this.onMouseEnterHandler}
                              onMouseLeave={this.onMouseExitHandler}>
                <div className="article__headshotContainer">
                  <img src={blog.user_info.user_imgSrc}
                       alt="headshot"
                       className="article__headshot"/>
                  <span className="article__headshotOverlay">
                  <ul className="headshotOverlay__details">
                    <li className="headshotOverlay__item">
                      {blog.user_info.user_name}
                    </li>
                    <li className="headshotOverlay__item">
                      {blog.timeStamp}
                    </li>
                  </ul>
                 </span>
                </div>
                <div className="article__snippet">
                  <h4 className="article__title">
                    {blog.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{__html: `${blog.content}`.substring(0, 259)}}
                  className="article__blurb">
                  </div>
                  <Link to={`/article/${blog._id}`}
                        className="article__readMore">
                    Read More...
                  </Link>
                </div>
              </article>
              </Link>
            })
          }


        </main>
        <footer className="footer">
          <section className="footer__aboutUs"
                   id="aboutUs">
            <h4 className="footer__heading">
              About us
            </h4>
            <p className="footer__aboutText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="footer__signInOut">
            <h4 className="footer__heading">
              Want to become a Contributor/Editor?
            </h4>
            <p>
              Log in with your Google account and start writing beautiful blogs, today!
            </p>
            <GoogleLogin
               className="footer__signIn"
               clientId="785808759484-3fu7g97ih8f9bjdvoajefs5cccp6dr15.apps.googleusercontent.com"
               buttonText="Login With Google!"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}/>
            <a href="#"
               onClick={this.signOut}
               className="footer__signOut">
               Sign out
            </a>
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
