import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>R S V P</h1>
    <p>We look forward to seeing you! In order to manage the guest count, we have reserved additional guest spots for couples that are engaged or married only. If you have specific dietary restrictions, please make sure it’s noted below. </p>
    <p>Please RSVP by January 20, 2020</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
