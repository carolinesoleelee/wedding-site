import React from "react"
import PropTypes from "prop-types"
import Hero from "./hero"
import Footer from "./footer"
import '../constants/layout.css';

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
