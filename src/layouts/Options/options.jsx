import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

import { Option } from "../../components/index";

import { Section } from "./options.styled";

const Options = ({ props, active, setActive }) => {
  const handleChange = (event) => {
    return setActive && setActive(event.target.value);
  };

  return (
    <Section>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={active}
          onChange={handleChange}
        >
          {props?.map((item, i) => {
            return item.label && item.value && <Option key={i} props={item} />;
          })}
        </RadioGroup>
      </FormControl>
    </Section>
  );
};

export default Options;
