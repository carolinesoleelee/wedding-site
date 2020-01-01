import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { lessThan } from '../constants/mediaQ';

const Gallery = () => {
  const {
    markdownRemark: {
      frontmatter: { images },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { section: { eq: "Gallery" } }) {
        frontmatter {
          images {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Container>
        <SEO title="Gallery" />
        <Header>
          Much thanks to the talented Jaxon Kim for the beautiful photography
        </Header>
        {images.map(image => (
          <ImageContainer key={image.id}>
            <Img
              alt="Rendering of Via Flagler by The Breakers"
              fluid={image.childImageSharp.fluid}
            />
          </ImageContainer>
        ))}
      </Container>
    </Layout>
  );
};

export default Gallery;

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 150px 0 80px;
`;

const Header = styled.h1`
  font-family: 'Canela-Light';
  font-weight: 200;
  font-size: 28px;
  text-align: center;
`;

const ImageContainer = styled.div`
  margin: 50px 220px;
  ${lessThan.tablet} {
    margin: 20px 30px;
  }
`;
