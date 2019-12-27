import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
    <h1>Our Wedding Party</h1>
    </div>

    <div>
      <h1>Groomsmen</h1>
      <p>We look forward to seeing you! In order to manage the guest count, we have reserved additional guest spots for couples that are engaged or married only. If you have specific dietary restrictions, please make sure it’s noted below. </p>
    </div>

    <div>
      <h1>Bridesmaids</h1>
      <p>We look forward to seeing you! In order to manage the guest count, we have reserved additional guest spots for couples that are engaged or married only. If you have specific dietary restrictions, please make sure it’s noted below. </p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
