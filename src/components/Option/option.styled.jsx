import styled from "styled-components";

const Section = styled.div`
  & .MuiTypography-root {
    font-weight: 500;
    font-size: 0.9rem;

    color: ${(props) => props.theme.color?.secondary};
  }
  & .MuiRadio-root.Mui-checked {
    color: ${(props) => props.theme.color?.secondary};
}
`;

const TopSection = styled.div``;

const BottomSection = styled.div``;

const DetailsSection = styled.div``;

const DetailsText = styled.p`
font-size: ${(props) => props.theme.fontSize?.small};
font-weight:  ${(props) => props.theme.fontsWeight?.normal};
color: ${(props) => props.theme.color?.textGreyDark};
line-height: 1.5rem;
`;

export { Section, TopSection, BottomSection, DetailsSection, DetailsText };
