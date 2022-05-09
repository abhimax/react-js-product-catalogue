import { useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { setCategory } from "../../store/reducer/category.reducer";
import { setProduct } from "../../store/reducer/productDetails.reducer";

import { Section, CheckBoxSection } from "./category.styled";

const Category = ({ label, value, defaultChecked, checked }) => {
  const dispatch = useDispatch();

  const clickHandel = () => {
    dispatch(
      setCategory({
        category: value,
      })
    );

    return dispatch(
      setProduct({
        product: null,
      })
    );
  };

  return (
    <Section>
      <CheckBoxSection>
        <FormControlLabel
          control={
            <Checkbox defaultChecked={defaultChecked} checked={checked} />
          }
          onClick={clickHandel}
          label={label}
          value={value}
        />
      </CheckBoxSection>
    </Section>
  );
};

export default Category;