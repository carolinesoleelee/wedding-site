import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { lessThan } from '../constants/mediaQ';
import Img from 'gatsby-image';

const faq = () => {
  //   const {
  //     markdownRemark: { frontmatter },
  //   } = useStaticQuery(graphql`
  //     query {
  //       markdownRemark(frontmatter: { section: { eq: "Groomsmen" } }) {

  //       }
  //     }
  //   `);

  //   console.log(frontmatter);
  return (
    <Layout>
      <SEO title="Page two" />
      <Container>
        <Image>
          <Header>FAQ</Header>
        </Image>
        <PeopleContainer>
          <BoxContainer>
            <CopyTop>FOR ANY ADDITIONAL QUESTIONS PLEASE REACH OUT.</CopyTop>
            <br /> <br />
            <Title>Can I bring kids to the wedding?</Title>
            <CopyDesc>
              We love your kids—we really do. But we want our wedding to be your
              night off! Please make arrangements to leave the young ones at
              home and enjoy the night with us.
            </CopyDesc>
            <br /> <br />
            <Title>Can I bring a date?</Title>
            <CopyDesc>
              In order to manage the guest count we ask that only those who are
              engaged or married bring a plus one to the wedding.
            </CopyDesc>
            <br /> <br />
            <Title>When is the RSVP deadline?</Title>
            <CopyDesc>
              It would be helpful if we could get all responses by January 20th.
            </CopyDesc>
            <br /> <br />
            <Title>Where do we park?</Title>
            <CopyDesc>
              There is a small parking lot directly by the entrance, as well as
              a large parking lot on the backside of the building. However, most
              people will find that neighborhood street parking will be the most
              accessible.
            </CopyDesc>
            <br /> <br />
            <Title>
              Will the ceremony and reception be indoors or outdoors?
            </Title>
            <CopyDesc>
              Both the ceremony and reception will be entirely indoors.
            </CopyDesc>
            <br /> <br />
            <Title>What happens between the ceremony and reception?</Title>
            <CopyDesc>
              After the ceremony, the bridal party will be taking pictures
              nearby for around an hour. Guests can remain in the reception hall
              for the cocktail hour.
            </CopyDesc>
            <br /> <br />
            <Title>What time is the reception scheduled to end?</Title>
            <CopyDesc>The reception hall is rented until 11pm.</CopyDesc>
            <br /> <br />
          </BoxContainer>
        </PeopleContainer>
      </Container>
    </Layout>
  );
};

export default faq;

const Container = styled.div`
  text-align: left;
`;

const BoxContainer = styled.div`
  margin: 0 26rem 0 55px;
`;

const Image = styled.div`
  background-image: url('/static/a4eb371c9bfb0ff7dfc1ab8e5e8dd37b/b17c1/leaf-pattern.jpg');
  background-size: cover;
`;

const Header = styled.h1`
  padding: 200px 0;
  font-family: Canela-thin;
  font-weight: 600;
  font-size: 90px;
  color: black;
  text-align: center;
  background-color: #ffffff73;
`;

const PeopleContainer = styled.div`
  background-color: rgb(185, 162, 119);
  color: white;
  padding: 60px 0px;
`;

const Title = styled.h1`
  font-family: Canela-light;
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const CopyDesc = styled.p`
  font-family: Calibre-light;
  font-size: 18px;
  padding: 0px;
  margin: 0px;
`;
const CopyTop = styled.p`
  font-family: Calibre-Medium;
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0px;
  margin: 0px;
`;
