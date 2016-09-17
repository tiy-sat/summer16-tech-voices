import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import NewArticle from '../lib/NewArticle'
jest.unmock("../lib/NewArticle")
jest.mock("../node_modules/simplemde")


describe("New Article", () => {

  it("should have a title input", () => {
    let NewArticleRendered = TestUtils.renderIntoDocument(
      <NewArticle />
    )

    let titleInputEl = TestUtils.findRenderedDOMComponentWithClass(NewArticleRendered, "editor__titleInput")

    expect(titleInputEl).toBeDefined()
  })

  it("should have a article input", () => {
    let NewArticleRendered = TestUtils.renderIntoDocument(
      <NewArticle />
    )

    let articleInputEl = TestUtils.findRenderedDOMComponentWithClass(NewArticleRendered, "editor__textArea")

    expect(articleInputEl).toBeDefined()
  })
})
