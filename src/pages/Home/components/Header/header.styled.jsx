import styled from "styled-components";

const Section = styled.div`
  margin-top: 3rem;
`;

const HeadingSection = styled.div``;

const SubHeadingSection = styled.div``;

const HeadingText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.medium};
  font-weight:  ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.textGreyDark};
`;

const SubHeadingText = styled.h3`
font-size: ${(props) => props.theme.fontSize?.small};
font-weight:  ${(props) => props.theme.fontsWeight?.normal};
color: ${(props) => props.theme.color?.textGrey};
`;

export {
  Section,
  HeadingSection,
  SubHeadingSection,
  HeadingText,
  SubHeadingText,
};