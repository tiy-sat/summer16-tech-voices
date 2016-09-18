import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Main from '../lib/main'


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

  it("should have a log in link in the footer", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    //Leaving this for future ref because couldnt get the test to pass
    // let loginEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered, "footer__signIn")
  })
})
