import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { lessThan } from '../constants/mediaQ';

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <Container>
      <ContentContainer>
        <Title>R S V P</Title>
        <Copy>
          We look forward to seeing you! In order to manage the guest count, we
          have reserved additional guest spots for couples that are engaged or
          married only. If you have specific dietary restrictions, please make
          sure it’s noted below.{' '}
        </Copy>
        <Copy>
          <strong>Please RSVP by January 20, 2020</strong>
        </Copy>

        <form
          name="response"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="response" />

          <StyledInputContainer className="field half first">
            <label htmlFor="name">Name *</label>
            <StyledInput type="text" name="name" id="name" />
          </StyledInputContainer>

          <StyledInputContainer className="field half">
            <label htmlFor="email">Email *</label>
            <StyledInput type="text" name="email" id="email" />
          </StyledInputContainer>

          <StyledInputContainer className="field half half">
            <label htmlFor="attending">Will you be attending? *</label>
            <br />
            <StyledSelect className="field last">
              <option htmlFor="yes">Yes</option>
              <option htmlFor="no">No</option>
            </StyledSelect>
          </StyledInputContainer>

          <StyledInputContainer className="field half">
            <label htmlFor="plusone">
              Will you be bringing any guests? (See <a href="/FAQ">FAQ</a>) *
            </label>
            <StyledInput type="text" name="plusone" id="plusone" />
          </StyledInputContainer>

          <StyledInputContainer className="field">
            <label htmlFor="message">Message</label>
            <StyledTextbox name="message" id="message" rows="6" />
          </StyledInputContainer>

          <div className="actions">
            <StyledButton
              type="submit"
              value="Send Message"
              className="special"
            />
          </div>
        </form>
      </ContentContainer>
    </Container>
  </Layout>
);

export default SecondPage;

const Container = styled.div`
  background-color: rgb(185, 162, 119);
  color: white;
  padding: 150px 0 80px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  font-family: Calibre-Light;

  ${lessThan.tablet} {
    max-width: 370px;
    margin: 0 25px;
  }
`;

const Title = styled.h1`
  font-family: Canela-thin;
  font-size: 50px;
  font-weight: 100;
`;

const Copy = styled.p`
  ${lessThan.tablet} {
    font-size: 20px;
    padding: 0px;
  }
`;

const StyledInput = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 2px;
  border-color: white;
  padding-left: 10px;
  border: none;
  margin-top: 5px;
`;

const StyledTextbox = styled.textarea`
  height: 150px;
  width: 100%;
  border-radius: 2px;
  border-color: white;
  padding-left: 10px;
  border: none;
  margin-top: 5px;
`;

const StyledSelect = styled.select`
  border-radius: 2px;
  border-color: white;
  text-align: left;
`;

const StyledInputContainer = styled.div`
  position: relative;
  text-align: left;
  margin-bottom: 20px;
`;

const StyledButton = styled.input`
  background-color: white;
  color: black;
  border-color: white;
  border-radius: 2px;
  padding: 5px 30px;
`;
