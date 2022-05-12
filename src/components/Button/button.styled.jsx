import styled from "styled-components";

const Section = styled.div`
  border-radius: ${(props) => props.theme.borderRadius?.card};
  background-color: ${(props) => props.theme.color?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

const Label = styled.label`
  cursor: pointer;
`;

const LabelText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.small};
  font-family: ${(props) => props.theme.fontsFamily?.primary};
  font-weight: ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.white};
  margin: 0.45rem 0.55rem;
`;

export { Section, Label, LabelText };