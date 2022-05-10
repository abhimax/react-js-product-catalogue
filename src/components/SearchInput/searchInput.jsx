import { ReactComponent as SearchIcon } from "../../assest/icons/search.svg";
import {
  Section,
  IconSection,
  InputSection,
  Input,
} from "./searchInput.styled";

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <Section>
      <IconSection>
      <SearchIcon />
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
