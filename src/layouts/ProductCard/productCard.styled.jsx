import styled from "styled-components";

const Section = styled.div`
  margin: 0.3rem 0;
  border-radius: ${(props) => props.theme.borderRadius?.card};
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.color?.white};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  @media screen and (min-width: 0px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 0px) and (max-width: 800px) {
    justify-content: flex-end;
  }
`;

const NameSection = styled.div``;

const NameText = styled.h1`
font-size: ${(props) => props.theme.fontSize?.small};
font-weight:  ${(props) => props.theme.fontsWeight?.thick};
color: ${(props) => props.theme.color?.textGreyDark};
`;

const TagsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CategorySection = styled.div`
  padding-top: 0.5rem;
`;

const CategoryText = styled.h1`
  font-size: 0.9rem;
  font-weight: ${(props) => props.theme.fontsWeight?.normal};
  color: ${(props) => props.theme.color?.textGrey};
`;

export {
  Section,
  LeftSection,
  RightSection,
  NameSection,
  NameText,
  TagsSection,
  CategorySection,
  CategoryText,
};