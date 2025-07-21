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
      className="w-11/12 mx-auto    h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] -ml-px"
      selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
      onSelect={handleSelect}>
      <TabList className={"border-none w-full -mt-1 bg-red-400"}>
        {tabs.map((tab, index) => (
          <Tab key={index}  >{tab.tabTitle}</Tab>
        ))}
      </TabList>
<div className="h-[490px] overflow-y-auto p-4">


      {tabs.map((tab, index) => (
        <TabPanel className="ml-3   " key={index}>
          {tab.tabContent}
        </TabPanel>
      ))}
      </div>
    </Tabs>
  );
};

export default TabsComponent;
