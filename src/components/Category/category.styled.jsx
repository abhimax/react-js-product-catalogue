import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;

  & .MuiFormControlLabel-root {
    margin-right: 0px !important;
    color: red !important;
    .MuiCheckbox-root{
      color: ${(props) => props.theme.color?.textGrey};
    }
    .MuiFormControlLabel-root{
      color: ${(props) => props.theme.color?.smoke};
     }
     .Mui-checked{
       color: ${(props) => props.theme.color?.primary};
     }
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
  font-size: ${(props) => props.theme.fontSize?.small};
  font-weight: ${(props) => props.theme.fontsWeight?.normal};
  color: ${(props) => props.theme.color?.textGrey};
  cursor: pointer;
`;

export { Section, CheckBoxSection, LabelSection, Label };
