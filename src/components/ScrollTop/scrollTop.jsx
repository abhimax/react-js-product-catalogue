import ScrollToTop from "react-scroll-up";
import { ReactComponent as ArrowIcon } from "../../assest/icons/arrow.svg";
import { ButtonSection } from "./scrollTop.styled";
//import { Icon, ButtonSection } from "./scrollTop.styled";

const ScrollTop = () => {
  return (
    <ScrollToTop showUnder={200}>
      <ButtonSection>
      <ArrowIcon />
      </ButtonSection>
    </ScrollToTop>
  );
};

export default ScrollTop;