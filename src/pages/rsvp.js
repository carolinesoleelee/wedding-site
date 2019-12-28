import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { lessThan } from '../constants/mediaQ';

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
<Container>
    <ContentContainer>
    <Title>R S V P</Title>
    <Copy>We look forward to seeing you! In order to manage the guest count, we have reserved additional guest spots for couples that are engaged or married only. If you have specific dietary restrictions, please make sure it’s noted below. </Copy>
    <Copy><strong>Please RSVP by January 20, 2020</strong></Copy>

    <form name="RSVP Response" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="response" />
            
            <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>

            <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>

            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" />
            </div>

            <div className="actions">
                <input type="submit" value="Send Message" className="special" />
            </div>
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

const Copy = styled.p`
    ${lessThan.tablet} {
        font-size: 20px;
        padding: 0 35px;
    }
`