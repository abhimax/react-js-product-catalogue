import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;

  & .active-product-card {
    border: ${(props) => props.theme.border?.selected};
  }
`;

export { Section };