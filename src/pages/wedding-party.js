import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby'; 
import { lessThan } from '../constants/mediaQ';

const SecondPage = () => {

  const {
      markdownRemark: { frontmatter },
    } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {section: {eq: "Image"}}) {
              frontmatter {
                background {
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
    console.log(frontmatter.background.childImageSharp.fluid)
  return (
  <Layout>
    <SEO title="Page two" />
    <Container >
      <Image>
    <Header>Our Wedding Party</Header>
    </Image>
<PeopleContainer>
    <div>
      <Title >Groomsmen</Title >
      <GridContainer>

        <IndGrid >
          <TitleDesc>Elijah Yoon</TitleDesc>
          <CopyDesc>Best Man</CopyDesc>
          <CopyDesc>SneakerHead</CopyDesc>
          <CopyDesc>JOKESTER</CopyDesc>
        </IndGrid >
        <IndGrid >
          <TitleDesc>Chris Kim</TitleDesc>
          <CopyDesc>KC-130 PILOT</CopyDesc>
          <CopyDesc>DAVE RAMSEY DISCIPLE</CopyDesc>
          <CopyDesc>LIKES DAD JOKES</CopyDesc>
        </IndGrid >
        <IndGrid >
          <TitleDesc>Dan Park</TitleDesc>
          <CopyDesc>Surprisingly deep</CopyDesc>
          <CopyDesc>ALWAYS SHIRTLESS</CopyDesc>
          <CopyDesc>"YUGI"</CopyDesc>
        </IndGrid >
        <IndGrid >
          <TitleDesc>Stephen Jung</TitleDesc>
          <CopyDesc>EQUINOX TRAINER</CopyDesc>
          <CopyDesc>PROUD DOG DAD</CopyDesc>
          <CopyDesc>"NIIIICE"</CopyDesc>
        </IndGrid >
        <IndGrid >
          <TitleDesc>David Yeom</TitleDesc>
          <CopyDesc>COUNSELOR</CopyDesc>
          <CopyDesc>RAPPER</CopyDesc>
          <CopyDesc>SMASH BROS SCRUB</CopyDesc>
        </IndGrid >

      </GridContainer>
    </div>

    <Line></Line>
      <Title >Bridesmaids</Title >
      <GridContainer>

        <IndGrid >
        <TitleDesc>Youlee Yu</TitleDesc>   
        <CopyDesc>MATRON OF HONOR</CopyDesc>
        <CopyDesc>Mom of the group</CopyDesc>
          <CopyDesc>also ACTUAL MOM</CopyDesc>
        </IndGrid >
        <IndGrid >
        <TitleDesc>Jessica Han</TitleDesc>   
        <CopyDesc>Fashionista</CopyDesc>
          <CopyDesc>CLININCAL PSYCHOLOGIST TO BE</CopyDesc>
          <CopyDesc>SNACK MONSTER</CopyDesc>
        </IndGrid >
        <IndGrid >
        <TitleDesc>Judith Han</TitleDesc>   
        <CopyDesc>PLANT LADY</CopyDesc>
          <CopyDesc>POLICY MAKER IN THE MAKING</CopyDesc>
          <CopyDesc>Semi-pro masseuse</CopyDesc>
        </IndGrid >
        <IndGrid >
        <TitleDesc>Sharon Kim</TitleDesc>   
        <CopyDesc>foodie</CopyDesc>
          <CopyDesc>adventurous</CopyDesc>
          <CopyDesc>pocket-sized</CopyDesc>
        </IndGrid >
        <IndGrid >
        <TitleDesc>Shasa Gil</TitleDesc>   
        <CopyDesc>Likes Long drives</CopyDesc>
        <CopyDesc>effortlessly tan</CopyDesc>
        <CopyDesc>Mysterious</CopyDesc>
        <TitleDesc></TitleDesc>   

        </IndGrid >


      </GridContainer>

</PeopleContainer>
    </Container >
  </Layout>
)
}

export default SecondPage

const Container = styled.div`
  text-align: center;

`

const Image = styled.div`
  background-image: url('/static/a4eb371c9bfb0ff7dfc1ab8e5e8dd37b/b17c1/leaf-pattern.jpg');
  background-size: cover;
`

const Header = styled.h1`
  padding: 200px 0;
  font-family: Canela-thin;
  font-weight: 600;
  font-size: 90px;
  color: black;
  background-color: #ffffff73;
`

const PeopleContainer = styled.div`
    background-color: rgb(185, 162, 119);
    color: white;
    padding: 60px 0px;
`

const Title = styled.h1`
  font-family: Canela-thin;
  font-size: 60px;
  font-weight: 300;
`

const Line = styled.div`
  border-top: white solid 1px;
  margin: 0px 60px;
  margin-bottom: 50px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);

  ${lessThan.tablet} {
    grid-template-columns: 100%;
  }
`

const IndGrid = styled.div`
  margin: 100px 50px;

  ${lessThan.tablet} {
    margin: 30px 50px;
  }
`

const TitleDesc = styled.h1`
  font-family: Canela-thin;
`

const CopyDesc = styled.p`
    font-family: Calibre-Medium;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0px;
    margin: 0px;
`