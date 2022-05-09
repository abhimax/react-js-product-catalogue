import ScrollToTop from "react-scroll-up";

import { Icon, ButtonSection } from "./scrollTop.styled";

const ScrollTop = () => {
  return (
    <ScrollToTop showUnder={200}>
      <ButtonSection>
        <Icon src="icons/arrow.svg" />
      </ButtonSection>
    </ScrollToTop>
  );
};

export default ScrollTop;