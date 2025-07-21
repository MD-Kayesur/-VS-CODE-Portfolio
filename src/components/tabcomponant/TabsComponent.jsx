import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { tabs } from "../../utils/data/tabs.data";
const TabsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex((tab) => tab.path === location.pathname);

  const handleSelect = (index) => {
    navigate(tabs[index].path);
  };

  return (
    <Tabs
      className="w-11/12 mx-auto"
      selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
      onSelect={handleSelect}>
      <TabList >
        {tabs.map((tab, index) => (
          <Tab key={index} >{tab.tabTitle}</Tab>
        ))}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel className="ml-3" key={index}>
          {tab.tabContent}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
