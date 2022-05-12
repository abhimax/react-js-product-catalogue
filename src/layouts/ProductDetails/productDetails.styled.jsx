import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-radius: ${(props) => props.theme.borderRadius?.card};
  background-color: ${(props) => props.theme.color?.white};
  display: flex;
  flex-direction: column;

  & .close-button {
    display: none;
  }

  & .MuiFormControlLabel-root {
    margin-right: 0px !important;
    color: ${(props) => props.theme.color?.textGreyDark}; !important;
  }
  & .MuiCheckbox-root{
      color: ${(props) => props.theme.color?.textGrey};
    }
  & .Mui-checked{
       color: ${(props) => props.theme.color?.primary};
     }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    height: 100%;
    width: 100%;
    padding-top: 2rem;

    & .close-button {
      display: flex;
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      cursor:pointer;
    }
  }
`;

const HeaderSection = styled.div`
  padding: 0 2rem 0.5rem 1.2rem;
  border-radius: ${(props) => props.theme.borderRadius?.card};
  background-color: ${(props) => props.theme.color?.white};
  border: 1px solid transparent;
  border-bottom-color: #f8f8f8;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid transparent;
  border-bottom-color: ${(props) => props.theme.color?.smoke};
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
`;

const HeadingSection = styled.div``;

const HeadingText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.medium};
  font-weight: ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.textGreyDark};
`;

const CloseButtonSection = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.color?.background};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    filter: brightness(95%);
  }
`;

const CloseButtonIcon = styled.img``;

const NameSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 2rem;
`;

const NameText = styled.h1`
  font-size: ${(props) => props.theme.fontSize?.small};
  font-weight: ${(props) => props.theme.fontsWeight?.thick};
  color: ${(props) => props.theme.color?.textGreyDark};
`;

const TagsSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 0.8rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ButtonSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 1.8rem;
`;

const DetailsSection = styled.div`
  padding: 0 1rem;
  margin-top: 0.8rem;
`;

const DetailsText = styled.p`
  font-size: ${(props) => props.theme.fontSize?.small};
  font-weight: ${(props) => props.theme.fontsWeight?.normal};
  color: ${(props) => props.theme.color?.textGreyDark};
  line-height: 1.5rem;
`;

const OptionsSection = styled.div`
  margin-top: 1.5rem;
`;

export {
  Section,
  HeadingSection,
  HeadingText,
  NameSection,
  NameText,
  TagsSection,
  ButtonSection,
  DetailsSection,
  DetailsText,
  OptionsSection,
  CloseButtonSection,
  CloseButtonIcon,
  HeaderSection,
};
