import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Music extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Music" keywords={[`gatsby`, `application`, `react`]} />
      </Layout>
    )
  }
}
