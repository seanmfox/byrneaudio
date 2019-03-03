import React, { Component } from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends Component {
  state = {
    checkedItems: new Map(),
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
    const {
      name,
      email,
      bandName,
      musicLocation,
      songs,
      date,
      budget,
      details,
    } = this.state

    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={this.handleSubmit}
      >
        <p>
          <label>
            Your Name:
            <br />
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email Address:
            <br />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Your Band's Name:
            <br />
            <textarea
              name="bandName"
              onChange={this.handleChange}
              value={bandName}
            />
          </label>
        </p>
        <p>
          <label>
            Where can I hear your music?
            <br />
            <textarea
              name="musicLocation"
              onChange={this.handleChange}
              value={musicLocation}
            />
          </label>
        </p>
        <p>
          <label>
            Project Needs (Check all the apply)
            <br />
            <input
              type="checkbox"
              id="mixing"
              name="mixing"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="mixing">Mixing</label>
            <input
              type="checkbox"
              id="mastering"
              name="mastering"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="mastering">Mastering</label>
            <input
              type="checkbox"
              id="editing"
              name="editing"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="editing">Editing</label>
            <input
              type="checkbox"
              id="tracking"
              name="tracking"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="tracking">Tracking</label>
            <input
              type="checkbox"
              id="other"
              name="other"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="other">Other</label>
          </label>
        </p>
        <p>
          <label>
            How many songs?
            <br />
            <input
              type="number"
              name="songs"
              onChange={this.handleChange}
              value={songs}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Desired Project Start Date
            <br />
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
              value={date}
            />
          </label>
        </p>
        <p>
          <label>
            Budget
            <br />
            <input
              type="number"
              name="budget"
              onChange={this.handleChange}
              value={budget}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Project Details or Other Information
            <br />
            <textarea
              name="details"
              onChange={this.handleChange}
              value={details}
            />
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
