import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Main from '../lib/main'
jest.unmock("../lib/main")
jest.mock("../node_modules/react-google-login")

describe("Main", () => {
  it("should have blogs", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    // fake state for blogPosts
    mainRendered.setState({
      blogPosts: [
         {
          _id: "1738",
          author: "Fetty",
          timeStamp: "2016.09.16",
          content: "Lorem",
          title: "moms spaghetti",
          user_info: {
            user_id: "679",
            user_name: "remys boys",
            user_imgSrc: "remyboys.jpeg"
          }
        }
      ]
    })
    // I want this to find an article
    let articleEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered,"article__previews")
    expect(articleEl).toBeDefined()
  })

  it("should have a footer", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    let footerEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered, "footer")
  })

  it("should have an about us in the footer", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    let aboutEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered,"footer__aboutUs" )
  })

  it("should have an log out link in the footer", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    let logoutEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered,"footer__signOut" )
  })
})
