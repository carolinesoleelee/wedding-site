import React from 'react'
import styled from 'styled-components'

const hero = () => {
    return (
        <ContentContainer>
            
        <StyledEyebrow>March 7th, 2020</StyledEyebrow>
        <StyledHeader>Caroline & Chris</StyledHeader> 
        <StyledEyebrow>We’re Getting Married! </StyledEyebrow>  
        </ContentContainer>
    )
}

export default hero;


const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 350px;
    text-align: center;
    padding: 100px 0;
`

const StyledContainer = styled.div`
    background-color: white;
`


const StyledEyebrow = styled.p`
    font-size: 20px;
    font-weight: 600;
    font-family: Canela-thin;
    line-height: 29px;
    padding: 0 70px;
    color: white;
`

const StyledHeader = styled.h1`
    font-size: 90px;
    font-weight: 600;
    font-family: Canela-thin;
    color: white;
`