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

  it("should have an about us link", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let aboutUsEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkAboutUs")
  })

  it("should link to about us", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let a = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkAboutUs")
    expect(a.getAttribute("href")).toEqual("#aboutUs")
  })

  it("should have a create link", () => {
    let navRendered =   TestUtils.renderIntoDocument(
    <Nav/>
    )
    let createEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkCreate")
    }
  )
})
