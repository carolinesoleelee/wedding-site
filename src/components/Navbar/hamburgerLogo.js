import React from 'react';
import styled from 'styled-components';
import { HamburgerLogoIcon } from '../../icons/svgs';
import HamburgerMenu from './NavModal/hamburgerMenu';

const StyledHamburgerLogo = styled.button`
  left: calc(100vw - 85px);
  background: transparent;
  border-color: transparent;
  padding: 0px;
  border-radius: 100%;
  cursor: pointer;
  position: fixed;
  outline: none;
  display: block;
  z-index: 3;
  top: 30px;
  /* ${greaterThan.tablet} {
    top: 40px;
    left: calc(100vw - 140px);
  } */
`;

const SpanContainer = styled.span`
  display: block;
  padding-top: 20px;
  transition: width 0.3s ease-in-out 0s, padding-top 0.3s ease-in-out 0s;
`;

class HamburgerLogo extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleToggle = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <>
        <StyledHamburgerLogo onClick={this.handleToggle}>
          <SpanContainer>
            <HamburgerLogoIcon />
          </SpanContainer>
        </StyledHamburgerLogo>
        <HamburgerMenu active={this.state.clicked} />
      </>
    );
  }
}
export default HamburgerLogo;
