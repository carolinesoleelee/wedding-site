import React from 'react'
import styled from 'styled-components'

const registry = () => {
    return (
        <>
        <ContentContainer>
        <StyledHeader>Our Registry</StyledHeader> 
        <StyledEyebrow> Your presence means so much to us and we are deeply grateful for any of you who would like to help us establish our new life together through the giving of a gift. Because most of our essentials have already been purchased we would prefer a cash gift, however we have listed a few items in the Amazon registry below for those who want to opt for that.</StyledEyebrow>
        </ContentContainer>

        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
    )
}

export default registry;

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
    padding: 100px 0;
`

const StyledContainer = styled.div`
    background-color: white;
`


const StyledEyebrow = styled.p`
    font-size: 20px;
    font-weight: 100;
    color: black;
    font-family: Calibre-Light;
    line-height: 29px;
    padding: 0 70px;
`

const StyledHeader = styled.h1`
    font-size: 40px;
    font-weight: 500;
    color: black;
    font-family: Canela-thin;
`