import FormGroup from "@mui/material/FormGroup";
import { useSelector } from "react-redux";

import categoryData from "../../data/home.json";

import { Category } from "../../components/index";

import { Section } from "./categories.styled";

const Categories = ({}) => {
  const data = categoryData.categories;

  const categories = useSelector((state) => state.category.category);

  return (
    <Section>
      <FormGroup>
        {data.map((item, i) => {
          return (
            <Category
              key={item.id}
              label={item.label}
              value={item.value}
              checked={categories.includes(item.value)}
            />
          );
        })}
      </FormGroup>
    </Section>
  );
};

export default Categories;