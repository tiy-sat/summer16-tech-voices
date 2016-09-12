import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/main"> home </Link>
        <Link to="/new-article"> create blog</Link>
        <h1>nav</h1>
        { this.props.children }
      </div>
    )
  }
})
