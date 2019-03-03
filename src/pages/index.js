import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi Vincent</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={this.handleSubmit}
          >
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={this.handleChange} />
              </label>
            </p>
            <button type="submit">Submit</button>
          </form>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
