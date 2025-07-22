import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { tabs as allTabs } from "../../utils/data/tabs.data";

const TabsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openTabs, setOpenTabs] = useState([]);

  useEffect(() => {
    const currentPath = location.pathname;
    const tab = allTabs.find((t) => t.path === currentPath);
    if (tab) {
      setOpenTabs((prev) => {
        const exists = prev.some((t) => t.path === currentPath);
        if (!exists) return [...prev, tab];
        return prev;
      });
    }
  }, [location.pathname]);

  const selectedIndex = openTabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  const handleSelect = (index) => {
    navigate(openTabs[index].path);
  };

  const handleClose = (e, index) => {
    e.stopPropagation();
    const closedTab = openTabs[index];
    const newTabs = openTabs.filter((_, i) => i !== index);
    setOpenTabs(newTabs);

    if (closedTab.path === location.pathname) {
      if (newTabs.length > 0) {
        navigate(newTabs[Math.max(0, index - 1)].path);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <Tabs
      className="w-11/12 mx-auto h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] -ml-px"
      selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
      onSelect={handleSelect}>
      <TabList className="border-none w-full -mt-1 bg-red-400 flex space-x-1 px-2">
        {openTabs.map((tab, index) => (
          <Tab key={index} className="relative px-4 py-2 bg-white rounded-t-md">
            <div className="flex items-center gap-2">
              {tab.tabTitle}
              <button
                onClick={(e) => handleClose(e, index)}
                className="text-xs text-gray-500 hover:text-red-500">
                ✕
              </button>
            </div>
          </Tab>
        ))}
      </TabList>

      <div className="h-[490px] overflow-y-auto p-4">
        {openTabs.map((tab, index) => (
          <TabPanel className="ml-3" key={index}>
            {tab.tabContent}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default TabsComponent;
