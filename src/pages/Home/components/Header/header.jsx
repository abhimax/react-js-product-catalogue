import React from 'react';
import headerData from "../../../../data/home.json";

import {
  Section,
  HeadingSection,
  HeadingText,
  SubHeadingSection,
  SubHeadingText,
} from "./header.styled";

const Header = () => {
  return (
    <Section>
      <HeadingSection>
        <HeadingText>{headerData?.header?.heading}</HeadingText>
      </HeadingSection>
      <SubHeadingSection>
        <SubHeadingText>{headerData?.header?.subHeading}</SubHeadingText>
      </SubHeadingSection>
    </Section>
  );
};

export default Header;