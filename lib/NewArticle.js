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
          content: "",
          imgSrc: ""
        }
      ]
    }
  },
  onSubmitHandler(e){
    e.preventDefault();
    var titleText = this.refs.titleArea.value;
    var imageSrcText;

    if(this.refs.imageArea.value == "") {
      imageSrcText = "https://analogerr.com/user_profile_pic/default.jpg";
    }  else {
      imageSrcText = this.refs.imageArea.value;
    };
    var textAreaValue = simplemde.options.previewRender(simplemde.value());
    var authorName = "admin";
    var submitDate = new Date();
    var submitMonth = submitDate.getMonth()+1;
    var submitDay = submitDate.getDate();
    var humanSubmitTime = submitDate.getFullYear() + "." + (submitMonth < 10 ? "0" + submitMonth:submitMonth) + "." + (submitDay < 10 ? "0" + submitDay:submitDay);

    var newMessageStringified = JSON.stringify({
      author: authorName,
      timeStamp: humanSubmitTime,
      title: titleText,
      content: textAreaValue,
      imgSrc: imageSrcText
    });
    $.ajax({
      type: "POST",
      url: "http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test7",
      data: newMessageStringified,
      contentType: "application/json",
      success: (response) => {
        window.location.href = `/#/article/${response._id}`
      }
    })
  },
  componentDidMount(){
    simplemde =  new SimpleMDE();
  },
  render() {
    return (
      <main className="editorContainer">
        <header className="newArticle__header">
          <img src="../assets/images/pexels-photo-61100.jpeg"
               alt="headshot of author"
               className="newArticle__authorpic"/>
          <h4 className="newArticle__author">
            admin
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
          <input type="text"
                 className="editor__imageInput"
                 name="imageSrc"
                 ref="imageArea"
                 placeholder="Add an image URL..." />
          <div className="mdeContainer">
            <textarea className="editor__textArea"
                      name="text"
                      placeholder="Write your thoughts..."
                      rows="8"
                      cols="40"
                      ref="markdownTextArea">
            </textarea>
          </div>
          <div className="newArticle__footer">
            <input type="submit"
                   name="Save Post"
                   value="Save Post"
                   className="editor__submit" />
          </div>
        </form>
      </main>
    )
  }
})
