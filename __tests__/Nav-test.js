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

  it("should link to about us", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let a = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__link about")
    expect(a.getAttribute("href")).toEqual("#aboutUs")
  })
})
