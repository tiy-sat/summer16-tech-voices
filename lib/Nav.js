import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <nav>
        <Link to="/"> home </Link>
        <Link to="/new-article"> create blog</Link>
        { this.props.children }
      </nav>
    )
  }
})
