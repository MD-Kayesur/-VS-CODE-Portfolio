import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { tabs as allTabs } from "../../utils/data/tabs.data";
import DefaultContent from "./DefaultContent";

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
    <div className="w-11/12 mx-auto  h-[calc(100vh-100px)]  hidden md:block md:h-[calc(100vh-80px)]  -ml-px">
      {openTabs.length > 0 ? (
        <Tabs
          selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
          onSelect={handleSelect}>
          <TabList className="border-none w-full cursor-pointer  -mt-1 bg-gray-200 flex  ">
            {openTabs.map((tab, index) => (
              <Tab
                key={index}
                className="relative px-4 py-2   hover:bg-base-300 cor
           rounded-t-md">
                <div className="flex items-center gap-3">
                  {tab.tabTitle}
                  <button
                    onClick={(e) => handleClose(e, index)}
                    className="text-xs text-red-500 cursor-pointer  ">
                    ✕
                  </button>
                </div>
              </Tab>
            ))}
          </TabList>

          <div className="lg:h-[490px]  md:h-[280px]   md:overflow-y-scroll ">
            {openTabs.map((tab, index) => (
              <TabPanel className="pl-2 mt-2" key={index}> 
                {tab.tabContent}
              </TabPanel>
            ))}
          </div>
        </Tabs>
      ) : (
        <DefaultContent />
      )}
    </div>
  );
};

export default TabsComponent;
