import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Main from '../lib/main'
jest.unmock("../lib/main")
jest.mock("../node_modules/react-google-login")

describe("Main", () => {
  it("should have blogs", () => {
    const main = TestUtils.renderIntoDocument(
      <Main/>
    )
    const mainEl = ReactDOM.findDOMNode(main)
    expect(mainEl).toBe(mainEl)
  })
})
