import styled, { keyframes, css } from "styled-components";

const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4em;
  background: #ffbb54;
  color: white;
  font-size: 18px;
  margin: 0;
  margin-bottom: 1em;
`;

const HeaderTitle = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin-left: 1em;
  margin-top: 0.6em;
`;

const HeaderButton = styled.div`
  background: white;
  width: 6em;
  height: 2em;
  border-radius: 1em;
  text-align: center;
  line-height: 2em;
  margin-top: 0.9em;
  margin-right: 1em;

  a {
    color: #ffbb54;
    font-size: 1em;
    font-weight: 500;
  }
`;

const PageContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

const _mainHeader = css`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: #ffbb54;
`;

const NarrowColumn = styled.div`
  padding-top: 5em;
  padding-bottom: 3em;
  height: auto;
  width: 22em;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h1 {
    ${_mainHeader}
  }

  h6 {
    padding: 0.5em 1em;
    font-weight: 300;
  }
`;

const AdaptableColumn = styled.div`
  padding-bottom: 3em;
  height: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h1 {
    ${_mainHeader}
  }

  h2 {
    margin-top: 1em;
    margin-bottom: -0.5em;
  }

  @media (min-width: 768px) {
    max-width: 32em;
  }
`;

const PaleAdaptableColumn = styled(AdaptableColumn)`
  background-color: #ffe59e10;
  padding-top: 0.1em;
`;

const DescriptionText = styled.div`
  text-align: center;
  padding: 1em;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CenterText = styled.div`
  text-align: center;
`;

const swing = keyframes`
  20% {
  transform: rotate(15deg);
}
40% {
  transform: rotate(-10deg);
}
60% {
  transform: rotate(5deg);
}
80% {
  transform: rotate(-5deg);
}
100% {
  transform: rotate(0deg);
}
`;

const BigLogo = styled.div`
  text-align: center;

  img {
    width: 10em;
    animation: ${swing} 2s ease 3;
  }
`;

const InviteButton = styled.button`
  height: 4em;
  width: 25em;
  background: #ffbb54;
  border: 0.3em solid #ffbb54;
  border-radius: 7em;
  margin-bottom: 3em;
  margin-top: 3em;
  overflow: hidden;

  a {
    font-weight: 600;
    font-size: 1.5em;
    color: white;
  }
`;

export {
  LoginHeader,
  HeaderTitle,
  HeaderButton,
  PageContent,
  NarrowColumn,
  BigLogo,
  InviteButton,
  AdaptableColumn,
  PaleAdaptableColumn,
  DescriptionText,
  CenterText,
};