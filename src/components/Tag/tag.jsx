import { Section, NameSection, NameText } from "./tag.styled";

const Tag = ({ label }) => {
  return (
    <Section>
      <NameSection>
        <NameText>{label}</NameText>
      </NameSection>
    </Section>
  );
};

export default Tag;