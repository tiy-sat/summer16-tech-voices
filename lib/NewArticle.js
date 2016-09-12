import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
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
                    cols="40">
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
