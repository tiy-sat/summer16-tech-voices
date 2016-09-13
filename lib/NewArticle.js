import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
var simplemde;

export default React.createClass({
  getInitialState() {
    return {
      blogs: [
        {
          author: "admin",
          timeStamp: "",
          title: "",
          content: ""
        }
      ]
    }
  },
  onSubmitHandler(e){
    e.preventDefault();
    var titleText = this.refs.titleArea.value;
    var textAreaValue = simplemde.value();
    var authorName = "admin";
    var submitTime = new Date();
    var humanSubmitTime = submitTime.toLocaleTimeString("en-US");

    var newMessageStringified = JSON.stringify({
      author: authorName,
      timeStamp: humanSubmitTime,
      title: titleText,
      content: textAreaValue
    });
    $.ajax({
      type: "POST",
      url: "http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test4",
      data: newMessageStringified,
      contentType: "application/json",
      success: (response) => {
        window.location.href = `/article/${response._id}`
      }
    })
  },
  componentDidMount(){
    simplemde =  new SimpleMDE();
  },
  render() {
    return (
      <main className="editorContainer">
        <header className="article__header">
          <img src="#"
               alt="headshot of author" />
          <h4 className="article__author">
          </h4>

        </header>
        <form className="editor"
              action="#"
              method="POST"
              ref="postForm"
              onSubmit={this.onSubmitHandler}>
          <input type="text"
                 className="editor__titleInput"
                 name="title"
                 ref="titleArea"
                 placeholder="Title..." />
          <textarea className="editor__textArea"
                    name="text"
                    placeholder="Write your thoughts..."
                    rows="8"
                    cols="40"
                    ref="markdownTextArea">
          </textarea>
          <input type="submit"
                 name="publish"
                 value="publish"
                 className="editor__submit" />
        </form>
      </main>
    )
  }
})
