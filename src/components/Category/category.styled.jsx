import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;

  & .MuiFormControlLabel-root {
    margin-right: 0px !important;
  }
`;

const CheckBoxSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LabelSection = styled.div`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;

  color: ${(props) => props.theme.color?.secondary};

  cursor: pointer;
`;

export { Section, CheckBoxSection, LabelSection, Label };
