import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
var simplemde;

export default React.createClass({
  onSubmitHandler(e){
    e.preventDefault();
    // var simplemde = this.refs.markdownTextArea
    console.log(simplemde.value());
    // $.post("http://tiny-tiny.herokuapp.com/collections/sa_tech_voices_test", (resp) => {
    //
    // })
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
                    onChange={this.onSubmitHandler}
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
