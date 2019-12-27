import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SecondSection from "../components/secondSection"
import LocationSection from "../components/locationSection"
import Registry from "../components/registry"
import Rsvp from "../components/rsvp"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
    <SecondSection />
    <LocationSection />
    <Registry />
    <Rsvp />
  </Layout> 
)

export default IndexPage
