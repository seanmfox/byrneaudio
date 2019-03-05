import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ContactForm from "../components/ContactForm"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedItems: new Map(),
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckboxChange = e => {
    const item = e.target.name
    const isChecked = e.target.checked
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }))
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
    }).then(res => {
      this.setState({ name: "", email: "" })
    })
  }

  render() {
    return (
      <Layout location="/">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Image />
        <div>
          <section className="about">
            <div className="triangle" />
            <h2>About</h2>
            <p className="about-desc">
              Byrne Audio is your all encompasing recording and live sound
              company located in the Pittsburgh area. We specialize in making
              you sound your best through the arts of live sound, recording, and
              mixing. Byrne Audio is owned and opperated by Vince Byrne. Vince
              has been in the recording and live sound industry for 5 years.
              With a bachlor of science from California University of PA in
              Commercial Music Technology, he guarentees absloute satisfaction
              for you, the client.
            </p>
          </section>
          <section className="clients">
            <div className="triangle" />
            <h2>Current Clients</h2>
            <div className="client-container">
              <div className="client-details">
                <h3>Godson of Majestic Muzic:</h3>
                <p>
                  Godson is an inspirational Hip Hop artist with a vision of
                  ridding the world of hatred and violence. Be sure to check out
                  some of his music in the Music tab.
                </p>
              </div>
              <div className="client-details">
                <h3>Di'onna</h3>
                <p>
                  Di'onna is a seasoned R&B artist. She specializes in
                  powerhouse vocals and that classic "big" sound. Be sure to
                  check out some of her music in the Music tab.
                </p>
              </div>
            </div>
          </section>
          <section className="contact-form-container">
            <div className="triangle" />
            <h2>Quote Request Form</h2>
            <div className="form-container">
              <p>
                Fill this out if you'd like a quote for your project. For
                general questions, email ...
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
