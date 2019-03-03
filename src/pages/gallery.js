import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Gallery extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Gallery" keywords={[`gatsby`, `application`, `react`]} />
      </Layout>
    )
  }
}
