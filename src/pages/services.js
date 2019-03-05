import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Services extends Component {
  render() {
    return (
      <Layout location="/services">
        <SEO title="Services" keywords={[`gatsby`, `application`, `react`]} />
      </Layout>
    )
  }
}
