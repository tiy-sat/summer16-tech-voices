import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Article from '../lib/Article'
jest.unmock("../lib/Article")

describe("Article", () => {
  it("should have article post", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Main/>
    )
    // fake state for blogPosts
    mainRendered.setState({
      blogData: {
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
    })
  })
})
