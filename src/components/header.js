import { Link } from "gatsby"
import React from "react"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <header>
        <nav>
          <div className="hamburger" onClick={this.handleClick}>
            <i className="fas fa-bars fa-2x" />
          </div>
          <ul className={`menu ${isOpen ? "open" : null}`}>
            <li
              className={`nav-link ${
                this.props.location === "/" ? "current-route" : null
              }`}
            >
              <Link to="/">HOME</Link>
            </li>
            <li className={`nav-link ${
                this.props.location === "/music" ? "current-route" : null
              }`}>
              <Link to="/music">MUSIC</Link>
            </li>
            <li className={`nav-link ${
                this.props.location === "/gallery" ? "current-route" : null
              }`}>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className={`nav-link ${
                this.props.location === "/services" ? "current-route" : null
              }`}>
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>
        </nav>
        <div className="heading-text">
          <h1 className="heading-name">Byrne Audio</h1>
          <p className="heading-tagline">
            WHERE YOUR MUSIC COMES TO LIFE TO LIVE ON FOREVER
          </p>
        </div>
      </header>
    )
  }
}
