import styled from "styled-components";

const Section = styled.div`
  width: auto;
  margin: 0.5rem 0.5rem 0 0;
  max-width: max-content;
  border-radius: ${(props) => props.theme.borderRadius?.card};
  background-color: ${(props) => props.theme.color?.primaryLight};
`;

const NameSection = styled.div``;

const NameText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.xSmall};
  font-family: ${(props) => props.theme.fontsFamily?.primary};
  font-weight: ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.primary};
  padding: 0 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Section, NameSection, NameText };
