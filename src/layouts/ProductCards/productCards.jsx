import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductCard } from "../ProductCard/index";
import { Section } from "./productCards.styled";
import { setProduct } from "../../store/reducer/productDetails.reducer";

const ProductCards = ({ cardsData }) => {
  const [activeCard, setActiveCard] = useState(null);

  const dispatch = useDispatch();

  const cardClickHandel = (product, cardIndex) => {
    setActiveCard(cardIndex + 1);

    return dispatch(
      setProduct({
        product: product,
      })
    );
  };

  return (
    <Section>
      {cardsData?.map((item, i) => {
        return (
          <ProductCard
            key={i}
            index={i}
            props={item}
            onCardClick={cardClickHandel}
            isActive={
              activeCard ? (activeCard === i + 1 ? true : false) : false
            }
          />
        );
      })}
    </Section>
  );
};

export default ProductCards;