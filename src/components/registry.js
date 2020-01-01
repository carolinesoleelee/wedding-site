import React from 'react';
import styled from 'styled-components';
import { lessThan } from '../constants/mediaQ';

const registry = () => {
  return (
    <>
      <ContentContainer>
        <StyledHeader>Our Registry</StyledHeader>
        <StyledEyebrow>
          {' '}
          Your presence means so much to us and we are deeply grateful for any
          of you who would like to help us establish our new life together
          through the giving of a gift. Because most of our essentials have
          already been purchased we would prefer a cash gift, however we have
          listed a few items in the Amazon registry below for those who want to
          opt for that.
        </StyledEyebrow>
      </ContentContainer>
      <StyledContainer>
        <div></div>
        <a
          href="https://www.amazon.com/wedding/share/chriscaroline"
          target="_blank"
        >
          <StyledInd>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="amazon"
              class="svg-inline--fa fa-amazon fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"
              ></path>
            </svg>
          </StyledInd>
        </a>

        <a href="https://www.paypal.com/paypalme2/yoon395" target="_blank">
          <StyledInd2>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="cc-paypal"
              class="svg-inline--fa fa-cc-paypal fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z"
              ></path>
            </svg>
          </StyledInd2>
        </a>

        <a href="https://venmo.com/chrisyoon" target="_blank">
          <StyledInd3>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path
                fill="currentColor"
                d="M3.94 9.72c.17.27.24.54.24.89 0 1.11-.95 2.55-1.72 3.57H.71L0 9.96l1.54-.15.37 3c.35-.56.78-1.45.78-2.06 0-.33-.06-.56-.15-.75l1.4-.28zM5.94 11.57c.28 0 1-.13 1-.53 0-.2-.14-.3-.3-.3-.29 0-.66.35-.7.83zm-.03.8c0 .5.27.7.64.7.4 0 .77-.1 1.27-.35l-.19 1.26c-.35.17-.89.28-1.42.28-1.33 0-1.81-.8-1.81-1.82 0-1.31.78-2.7 2.38-2.7.88 0 1.38.49 1.38 1.18 0 1.1-1.43 1.45-2.25 1.46zM12.6 10.7c0 .17-.03.4-.05.56l-.46 2.92h-1.5l.42-2.68.03-.3c0-.2-.12-.24-.26-.24-.2 0-.4.09-.52.15l-.48 3.07h-1.5l.68-4.37h1.3l.02.35c.31-.2.72-.43 1.29-.43.76 0 1.03.4 1.03.98zM17.05 10.21c.43-.3.83-.48 1.4-.48.76 0 1.03.4 1.03.98a4 4 0 0 1-.05.55l-.46 2.92h-1.5l.43-2.73.02-.22c0-.22-.12-.27-.27-.27-.18 0-.37.08-.5.15l-.48 3.07h-1.5l.43-2.74.02-.21c0-.22-.12-.27-.27-.27-.2 0-.39.09-.52.15l-.47 3.06h-1.51l.69-4.36h1.28l.05.36c.3-.22.7-.44 1.24-.44.48 0 .78.2.94.48zM22.46 11.48c0-.35-.09-.6-.35-.6-.6 0-.72 1.05-.72 1.58 0 .41.11.66.38.66.56 0 .69-1.1.69-1.64zm-2.6.92c0-1.38.74-2.67 2.41-2.67 1.27 0 1.73.75 1.73 1.78 0 1.36-.72 2.77-2.44 2.77-1.27 0-1.7-.83-1.7-1.88z"
              />
            </svg>
          </StyledInd3>
        </a>

        <div></div>
      </StyledContainer>
    </>
  );
};

export default registry;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  padding: 100px 0 50px;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto 25% 25% 25% auto;
  padding-bottom: 100px;

  ${lessThan.tablet} {
    margin: 0 25px;
  }
`;

const StyledInd = styled.div`
  color: #565656;
  transition: color 0.23s ease-in-out;
  -moz-transition: color 0.23s ease-in-out;
  -webkit-transition: color 0.23s ease-in-out;

  max-width: 110px;
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);

  &:hover {
    color: orange;
  }

  ${lessThan.tablet} {
    max-width: 50px;
  }
`;

const StyledInd2 = styled.div`
  color: #565656;
  transition: color 0.23s ease-in-out;
  -moz-transition: color 0.23s ease-in-out;
  -webkit-transition: color 0.23s ease-in-out;
  max-width: 130px;

  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);

  &:hover {
    color: #0070ba;
  }

  ${lessThan.tablet} {
    max-width: 50px;
  }
`;
const StyledInd3 = styled.div`
  color: #565656;
  transition: color 0.23s ease-in-out;
  -moz-transition: color 0.23s ease-in-out;
  -webkit-transition: color 0.23s ease-in-out;
  max-width: 140px;
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);

  &:hover {
    color: #4793c9;
  }

  ${lessThan.tablet} {
    max-width: 50px;
  }
`;

const StyledEyebrow = styled.p`
  font-size: 18px;
  font-weight: 100;
  color: black;
  font-family: Calibre-Light;
  line-height: 29px;
  padding: 0 70px;

  ${lessThan.tablet} {
    font-size: 17px;
    line-height: 25px;
    padding: 0px 38px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: black;
  font-family: Canela-light;

  ${lessThan.tablet} {
    font-size: 35px;
  }
`;
