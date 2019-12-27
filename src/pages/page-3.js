import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
<Container>
    <ContentContainer>
    <Title>R S V P</Title>
    <p>We look forward to seeing you! In order to manage the guest count, we have reserved additional guest spots for couples that are engaged or married only. If you have specific dietary restrictions, please make sure it’s noted below. </p>
    <p><strong>Please RSVP by January 20, 2020</strong></p>

    <form name="RSVP Response" method="POST" data-netlify="true">
    <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </ContentContainer>
</Container>
  </Layout>
)

export default SecondPage

const Container = styled.div`
    background-color: rgb(185, 162, 119);
    color: white;
    padding: 300px 0 80px;
`

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 700px;
    text-align: center;
    font-family: Calibre-Light;
`

const Title = styled.h1`
    font-family: Canela-thin;
    font-size: 50px;
    font-weight: 100;
`