import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-radius: ${(props) => props.theme.borderRadius?.card};
  background-color: ${(props) => props.theme.color?.white};
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  border: 1px solid transparent;
  border-bottom-color: ${(props) => props.theme.color?.smoke};
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;

`;

const HeadingText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.medium};
  font-weight:  ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.textGreyDark};
`;

const CategoriesSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 1.3rem;
`;

const SearchSection = styled.div`
  margin-top: 1rem;
  padding: 0 2.2rem 0 1.2rem;
`;

export {
  Section,
  HeadingSection,
  HeadingText,
  CategoriesSection,
  SearchSection,
};