import { Section, Label, LabelText } from "./button.styled";

const Button = ({ label, onClick }) => {
  return (
    <Section as="button" onClick={onClick}>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
    </Section>
  );
};

export default Button;