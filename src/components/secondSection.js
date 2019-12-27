import React from 'react'
import styled from 'styled-components'

const secondSection = () => {
    return (
        <StyledContainer>
        <ContentContainer>
        <StyledEyebrow>You're Invited</StyledEyebrow> 
        <StyledHeader>Caroline and Chris joyfully request the pleasure of your company as we speak our vows and join in a marriage covenant in the presence of God, family, and friends.  </StyledHeader>
        </ContentContainer>
        </StyledContainer>
    )
}

export default secondSection;

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 700px;
    text-align: center;
    padding: 60px 0;
`

const StyledContainer = styled.div`
    background-color: white;
`


const StyledEyebrow = styled.p`
    font-size: 14px;
    font-weight: 100;
    color: black;
    text-transform: uppercase;
    font-family: Calibre-Medium;
    letter-spacing: 0.2em;
`

const StyledHeader = styled.h1`
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    color: black;
    font-family: Canela-thin;
    white-space: pre-wrap;
    font-size: 2.35rem;
    line-height: 1.5136;
`