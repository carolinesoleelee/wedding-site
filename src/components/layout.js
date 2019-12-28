import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar/index"
import Footer from "./footer"
import '../constants/layout.css';

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <Navbar />
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
