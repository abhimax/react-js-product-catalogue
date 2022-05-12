import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius?.input  };
  padding: 0.42rem;
  border: ${(props) => props.theme.border?.primary};
  background-color: ${(props) => props.theme.color?.smoke};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    height: 20px;
    width: 20px;
  }
`;

const InputSection = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
`;

export { Section, IconSection, InputSection, Input };
