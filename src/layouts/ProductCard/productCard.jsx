import { Tag } from "../../components/index";

import {
  Section,
  LeftSection,
  RightSection,
  NameSection,
  NameText,
  TagsSection,
  CategorySection,
  CategoryText,
} from "./productCard.styled";

const ProductCard = ({ index, props, isActive, onCardClick }) => {
  return (
    <Section
      onClick={() => {
        return onCardClick(props, index);
      }}
      className={`${isActive ? "active-product-card" : ""}`}
    >
      <LeftSection>
        <NameSection>
          <NameText>{props?.productName}</NameText>
        </NameSection>

        <TagsSection>
          {props?.tags?.map((item, i) => {
            return <Tag key={`${i}-${item}`} label={item} />;
          })}
        </TagsSection>
      </LeftSection>
      <RightSection>
        <CategorySection>
          <CategoryText>{props?.category}</CategoryText>
        </CategorySection>
      </RightSection>
    </Section>
  );
};

export default ProductCard;