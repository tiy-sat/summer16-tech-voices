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
    $.get(`http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test5/${this.props.params.articleID}`, (response) => {
      this.setState({
        _id: response._id,
        author: response.author,
        timeStamp: response.timeStamp,
        content: response.content,
        title: response.title
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
            {this.state.author}
          </h4>
          <time className="article__timestamp"
                datetime="2016-09-12">
            {this.state.timeStamp}
          </time>
        </header>
        <article className="article">
          <h2 className="article__title">
            {this.state.title}
          </h2>
          <p className="article__content">
            {this.state.content}
          </p>
        </article>
      </main>
    )
  }
})
