import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { lessThan } from '../constants/mediaQ';
import Img from 'gatsby-image';

const SecondPage = () => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { section: { eq: "Groomsmen" } }) {
        frontmatter {
          chris {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dan {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          elijah {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          stephen {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          david {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          youlee {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          jessica {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          judith {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sharon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          shasa {
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
  return (
    <Layout>
      <SEO title="Wedding Party" />
      <Container>
        <PeopleContainer>
          <Image>
            <Header>Our Wedding Party</Header>
          </Image>
          <div>
            <Title>Groomsmen</Title>
            <GridContainer>
              <IndGrid>
                <ImageContainer>
                  <Img fluid={frontmatter.elijah.childImageSharp.fluid} />
                </ImageContainer>
                <TitleDesc>Elijah Yoon</TitleDesc>
                <CopyDesc>Best Man</CopyDesc>
                <CopyDesc>SneakerHead</CopyDesc>
                <CopyDesc>JOKESTER</CopyDesc>
              </IndGrid>
              <IndGrid>
                <ImageContainer>
                  {' '}
                  <Img fluid={frontmatter.chris.childImageSharp.fluid} />
                </ImageContainer>

                <TitleDesc>Chris Kim</TitleDesc>
                <CopyDesc>KC-130 PILOT</CopyDesc>
                <CopyDesc>DAVE RAMSEY DISCIPLE</CopyDesc>
                <CopyDesc>LIKES DAD JOKES</CopyDesc>
              </IndGrid>
              <IndGrid>
                <ImageContainer>
                  {' '}
                  <Img fluid={frontmatter.dan.childImageSharp.fluid} />
                </ImageContainer>
                <TitleDesc>Dan Park</TitleDesc>
                <CopyDesc>Surprisingly deep</CopyDesc>
                <CopyDesc>ALWAYS SHIRTLESS</CopyDesc>
                <CopyDesc>"YUGI"</CopyDesc>
              </IndGrid>
              <IndGrid>
                <ImageContainer>
                  {' '}
                  <Img fluid={frontmatter.stephen.childImageSharp.fluid} />
                </ImageContainer>

                <TitleDesc>Stephen Jung</TitleDesc>
                <CopyDesc>EQUINOX TRAINER</CopyDesc>
                <CopyDesc>PROUD DOG DAD</CopyDesc>
                <CopyDesc>"NIIIICE"</CopyDesc>
              </IndGrid>
              <IndGrid>
                <ImageContainer>
                  {' '}
                  <Img fluid={frontmatter.david.childImageSharp.fluid} />
                </ImageContainer>
                <TitleDesc>David Yeom</TitleDesc>
                <CopyDesc>COUNSELOR</CopyDesc>
                <CopyDesc>RAPPER</CopyDesc>
                <CopyDesc>SMASH BROS SCRUB</CopyDesc>
              </IndGrid>
            </GridContainer>
          </div>

          <Line></Line>
          <Title>Bridesmaids</Title>
          <GridContainer>
            <IndGrid>
              <ImageContainer>
                {' '}
                <Img fluid={frontmatter.youlee.childImageSharp.fluid} />
              </ImageContainer>
              <TitleDesc>Youlee Yu</TitleDesc>
              <CopyDesc>MATRON OF HONOR</CopyDesc>
              <CopyDesc>Mom of the group</CopyDesc>
              <CopyDesc>also ACTUAL MOM</CopyDesc>
            </IndGrid>
            <IndGrid>
              <ImageContainer>
                <Img fluid={frontmatter.jessica.childImageSharp.fluid} />
              </ImageContainer>
              <TitleDesc>Jessica Han</TitleDesc>
              <CopyDesc>Fashionista</CopyDesc>
              <CopyDesc>I/O PSYCHOLOGIST TO BE</CopyDesc>
              <CopyDesc>SNACK MONSTER</CopyDesc>
            </IndGrid>
            <IndGrid>
              <ImageContainer>
                <Img fluid={frontmatter.judith.childImageSharp.fluid} />
              </ImageContainer>
              <TitleDesc>Judith Han</TitleDesc>
              <CopyDesc>PLANT LADY</CopyDesc>
              <CopyDesc>POLICY MAKER IN THE MAKING</CopyDesc>
              <CopyDesc>Semi-pro masseuse</CopyDesc>
            </IndGrid>
            <IndGrid>
              <ImageContainer>
                <Img fluid={frontmatter.sharon.childImageSharp.fluid} />
              </ImageContainer>
              <TitleDesc>Sharon Kim</TitleDesc>
              <CopyDesc>foodie</CopyDesc>
              <CopyDesc>adventurous</CopyDesc>
              <CopyDesc>pocket-sized</CopyDesc>
            </IndGrid>
            <IndGrid>
              <ImageContainer>
                <Img fluid={frontmatter.shasa.childImageSharp.fluid} />
              </ImageContainer>
              <TitleDesc>Shasa Gil</TitleDesc>
              <CopyDesc>Likes Long drives</CopyDesc>
              <CopyDesc>effortlessly tan</CopyDesc>
              <CopyDesc>Mysterious</CopyDesc>
            </IndGrid>
          </GridContainer>
        </PeopleContainer>
      </Container>
    </Layout>
  );
};

export default SecondPage;

const Container = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  max-width: 250px;
  margin: 0 auto;
`;

const Image = styled.div`
  background-image: url('/static/6a698b8c8fc134b4a02efe77d6be6270/2baa7/marble.jpg');
  background-size: cover;
`;

const Header = styled.h1`
  padding: 150px 0;
  font-family: Canela-light;
  font-weight: 300;
  font-size: 90px;
  color: rgb(197, 197, 197);
  background-color: #ffffff73;
`;

const PeopleContainer = styled.div`
  background-color: rgb(185, 162, 119);
  color: white;
  padding: 0px;
`;

const Title = styled.h1`
  font-family: Canela-thin;
  font-size: 60px;
  font-weight: 300;
  padding-top: 50px;
`;

const Line = styled.div`
  border-top: white solid 1px;
  margin: 0px 60px;
  margin-bottom: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);

  ${lessThan.tablet} {
    grid-template-columns: 100%;
  }
`;

const IndGrid = styled.div`
  margin: 100px 50px;

  ${lessThan.tablet} {
    margin: 30px 50px;
  }
`;

const TitleDesc = styled.h1`
  font-family: Canela-light;
  font-weight: 300;
  margin: 20px;
`;

const CopyDesc = styled.p`
  font-family: Calibre-Medium;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0px;
  margin: 0px;
`;
