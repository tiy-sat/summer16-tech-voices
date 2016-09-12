import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>main</h1>
        <Link to="/article"> to article</Link>
      </div>
    )
  }
})
