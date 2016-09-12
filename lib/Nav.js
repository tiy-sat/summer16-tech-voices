import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    // h1 nav just a placeholder to be removed after styling
    return (
      <nav>
        <Link to="/main"> home </Link>
        <Link to="/new-article"> create blog</Link>
        <h1>nav</h1>
        { this.props.children }
      </nav>
    )
  }
})
