import { useState } from "react";
import { useDispatch } from "react-redux";

import { Options } from "../Options/index";
import { Tag, Button } from "../../components/index";
import { ReactComponent as CloseIcon } from "../../assest/icons/close.svg";
import {
  HeaderSection,
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
} from "./productDetails.styled";

import { setProduct } from "../../store/reducer/productDetails.reducer";

const ProductDetails = ({ props }) => {
  const [activeOption, setActiveOption] = useState(props?.option1);

  const dispatch = useDispatch();

  const buttonClickHandel = () => {
    return window.open(
      `${props?.manufacturerUrl}`,
      "_blank",
      "noopener noreferrer"
    );
  };

  const closeButtonHandel = () => {
    return dispatch(
      setProduct({
        product: null,
      })
    );
  };

  return (
    <Section>
      <HeaderSection>
        <HeadingSection>
          <HeadingText>Product Details</HeadingText>
        </HeadingSection>

        <CloseButtonSection
          className="close-button"
          onClick={closeButtonHandel}
        >
           <CloseIcon />
        </CloseButtonSection>
      </HeaderSection>

      <NameSection>
        <NameText>{props?.productName}</NameText>
      </NameSection>

      <TagsSection>
        {props?.tags?.map((item, i) => {
          return <Tag key={i} label={item} />;
        })}
      </TagsSection>

      <ButtonSection>
        <Button label={"Go to manufacturer"} onClick={buttonClickHandel} />
      </ButtonSection>

      <DetailsSection>
        <DetailsText>{props?.description}</DetailsText>

        <OptionsSection>
          <Options
            props={[
              {
                label: props?.option1,
                value: props?.option1,
              },
              {
                label: props?.option2,
                value: props?.option2,
              },
            ]}
            active={activeOption}
            setActive={setActiveOption}
          />
        </OptionsSection>
      </DetailsSection>
    </Section>
  );
};

export default ProductDetails;