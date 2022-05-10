import { Categories } from "../Categories/index";

import { SearchInput } from "../../components/index";

import {
  Section,
  HeadingSection,
  HeadingText,
  CategoriesSection,
  SearchSection,
} from "./filterCard.styled";

const FilterCard = ({ searchValue, setSearchValue }) => {
  return (
    <Section>
      <HeadingSection>
        <HeadingText>I'm looking for...</HeadingText>
      </HeadingSection>

      <CategoriesSection>
        <Categories />
      </CategoriesSection>

      <SearchSection>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </SearchSection>
    </Section>
  );
};

export default FilterCard;