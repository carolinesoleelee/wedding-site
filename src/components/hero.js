import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { lessThan } from '../constants/mediaQ';
import { format } from 'url';

const hero = () => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { section: { eq: "Image" } }) {
        frontmatter {
          headerImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  console.log(frontmatter.headerImage.childImageSharp);
  return (
    <StyledContainer>
      <ContentContainer>
        <StyledEyebrow>March 7th, 2020</StyledEyebrow>
        <StyledHeader>Caroline & Chris</StyledHeader>
        <StyledEyebrow>We’re Getting Married! </StyledEyebrow>
      </ContentContainer>
    </StyledContainer>
  );
};

export default hero;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 350px;
  text-align: center;
  min-height: 100vh;
  padding-top: 245px;
`;

const StyledContainer = styled.div`
  background-image: url('/static/b9930882c55cc48cac44a2740a4079b3/2baa7/header.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  ${lessThan.tablet} {
    background-position: center;
  }
`;

const StyledEyebrow = styled.p`
  font-size: 20px;
  font-weight: 300;
  font-family: Canela-Light;
  line-height: 29px;
  padding: 15px 70px;
  color: white;

  ${lessThan.tablet} {
    line-height: 0px;
    padding: 5px 70px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 90px;
  font-weight: 200;
  font-family: Canela-Light;
  line-height: 120px;
  color: white;
  ${lessThan.tablet} {
    font-size: 55px;
    line-height: 60px;
  }
`;
