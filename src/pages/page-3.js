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

    {/* <form method="post" name="RSVP Response" netlify>
            <label for='First Name'>First Name</label>
            <input type="text" id="firstname" name="firstname"></input>
            <label for='Email'>Email</label>
            <input type="text" id="email" name="email"></input>
    <button type="submit">Send</button>
`</form> */}
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