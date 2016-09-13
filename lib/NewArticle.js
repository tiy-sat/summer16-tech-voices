import React from 'react'
import { Link } from 'react-router'
import SimpleMDE from 'simplemde'

export default React.createClass({
  componentDidMount(){
    var simplemde = new SimpleMDE()
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
              method="POST">
          <input type="text"
                 className="editor__titleInput"
                 name="title"
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
