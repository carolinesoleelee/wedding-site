import React from 'react'
import styled from 'styled-components'

const locationSection = () => {
    return (
        <StyledContainer>
        <ContentContainer>
            <StyledGridContainer>
        <StyledIndContainer>
        <StyledEyebrow>WHEN</StyledEyebrow>
        <StyledTitle>
            <div>Saturday</div>
        March 7, 2020</StyledTitle> 
        <StyledDetail>Ceremony: 6pm—7pm</StyledDetail>
        <StyledDetail>Reception: 7pm—11pm</StyledDetail>
        </StyledIndContainer>

<Line>
        <StyledIndContainer>
        <StyledEyebrow>WHERE</StyledEyebrow>
        <StyledTitle>
            <div>The Great Room </div>
        at Historic Savage Mill</StyledTitle> 
        <StyledDetail>8600 Foundry Street</StyledDetail>
        <StyledDetail>Savage, MD 20763</StyledDetail>
        </StyledIndContainer>
        </Line>
</StyledGridContainer>
</ContentContainer>
</StyledContainer>
    )
}

export default locationSection;

const StyledContainer = styled.div`
    background-color: rgb(185, 162, 119);
    color: white;
`

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 950px;
    text-align: center;
    padding: 200px 0;
`

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 46% 54%;
    grid-gap: 25px;
`

const StyledIndContainer = styled.div`
    padding: 0 10px;
`

const Line = styled.span`
    border-left: white solid 1px;
`

const StyledEyebrow = styled.p`
    font-family: Calibre-Medium;
    font-size: 15px;
    letter-spacing: 1px;
    padding-bottom: 14px;
`

const StyledTitle = styled.h1`
    font-family: Canela-thin;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: .5px;
    padding-bottom: 14px;
`

const StyledDetail = styled.p`
    font-family: Canela-thin;
    font-size: 25px;
    line-height: 35px;
    font-weight: 500;
    letter-spacing: .5px;
    margin: 0px;
`