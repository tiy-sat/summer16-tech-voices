import Main from '../lib/main'
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import TestUtils from 'react-addons-test-utils'


describe("Main", () => {
  it("should have blogs", () => {
    const main = TestUtils.renderIntoDocument(
      <Main/>
    )
    const mainEl = ReactDOM.findDOMNode(main)
    expect(mainEl).toContain()
  })
})
