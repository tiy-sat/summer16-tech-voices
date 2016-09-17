import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Nav from '../lib/Nav'
jest.unmock("../lib/Nav")

describe("Nav", () => {
  it("should have a logo", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let logoEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkLogo")
    expect(logoEl).toBeDefined()
  })
})
