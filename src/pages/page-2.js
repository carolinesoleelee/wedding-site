import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby'; 

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
         </IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >

      </GridContainer>
    </div>

    <Line></Line>
      <Title >Bridesmaids</Title >
      <GridContainer>

        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >
        <IndGrid >what</IndGrid >

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
`

const IndGrid = styled.div`
  margin: 100px 50px;
`