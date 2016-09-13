import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

export default React.createClass({
  getInitialState() {
    return {
      _id: "",
      author: "admin",
      timeStamp: "",
      content: "",
      title: ""
    }
  },
  componentWillMount() {
    $.get(`http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test4/${this.props.params.articleID}`, (response) => {
      console.log(response);
      this.setState({
        _id: "",
        author: "admin",
        timeStamp: "",
        content: "",
        title: ""
      })
    })
  },
  render() {
    return (
      <main className="articleContainer">
        <header className="article__header">
          <img src="#"
               alt="headshot of author"
               className="article__authorHeadshot"/>
          <h4 className="article__author">
            Adam Age
          </h4>
          <time className="article__timestamp"
                datetime="2016-09-12">
            Time is Now
          </time>
        </header>
        <article className="article">
          <h2 className="article__title">
            Lorem
          </h2>
          <h3 className="article__subtitle">
            Ipsum
          </h3>
          <p className="article__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </main>
    )
  }
})
