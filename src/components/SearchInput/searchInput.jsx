import {
  Section,
  IconSection,
  InputSection,
  Input,
  Icon,
} from "./searchInput.styled";

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <Section>
      <IconSection>
        <Icon className="search-icon" src="icons/search.svg" />
      </IconSection>
      <InputSection>
        <Input
          placeholder="Type here..."
          value={searchValue}
          onChange={(e) => {
            return setSearchValue && setSearchValue(e.target.value);
          }}
        />
      </InputSection>
    </Section>
  );
};

export default SearchInput;
