import React, { Component } from "react"
import { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"

// function pageDescription(text) {
//   return text
// }

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      head,
      body,
    } = this.props

    invariant(typeof head.title === "string", "Your page needs a title")

    const meta = [
      { name: "twitter:title", content: head.title },
      // { name: "twitter:description", content: pageDescription(body) },
      // { name: "twitter:image", content: header.image },
      { property: "og:title", content: head.title },
      { property: "og:type", content: "article" },
      // { property: "og:url", content: "http://www.example.com/" },
      // { property: "og:description", content: pageDescription(body) },
      // { property: "og:image", content: header.image },
    ]

    return (
      <div>
        <Helmet
          title={ head.title }
          meta={ meta }
        />

        <h1>{ head.title }</h1>
        {
          body &&
          <div
            dangerouslySetInnerHTML={ { __html: body } }
          />
        }
        { this.props.children }
      </div>
    )
  }
}
