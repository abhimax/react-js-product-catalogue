import MaterialTabs from "@mui/material/Tabs";
import MaterialTab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "./tabs.styled";
import { setTab } from "../../store/reducer/tabs.reducer";

const Tabs = ({}) => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.tabs.activeTab);

  const items = [
    {
      id: "ti-1",
      label: "Product",
      disable: false,
    },
    {
      id: "ti-2",
      label: "Addresses",
      disable: true,
    },
    {
      id: "ti-3",
      label: "Overview",
      disable: true,
    },
  ];

  const tabChangeHandel = (event, newValue) => {
    return dispatch(
      setTab({
        activeTab: newValue,
      })
    );
  };

  return (
    <Section>
      <MaterialTabs
        value={activeTab}
        onChange={tabChangeHandel}
        aria-label="basic tabs example"
      >
        {items.map((item, i) => {
          return (
            <MaterialTab
              key={item.id}
              label={`${i + 1} ${item.label}`}
              disabled={item.disable}
              style={{
                textTransform: "capitalize",
              }}
            />
          );
        })}
      </MaterialTabs>
    </Section>
  );
};

export default Tabs;