import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { tabs as allTabs } from "./tabs.data";
import DefaultContent from "./DefaultContent";
import DropdownComponent from "../dropdown/DropdownComponent ";

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
    <>
      <div className="w-full mx-auto cursor-pointer  border-l-2 border-white    md:pt-0     -ml-px">
        {openTabs.length > 0 ? (
          <Tabs
            selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
            onSelect={handleSelect}
            className=" mt-17 md:mt-0">
            <TabList
              className="  
      border-none w-full cursor-pointer -mt-1 flex z-[10] fixed md:sticky bg-red-200 md:flex
      overflow-x-auto whitespace-nowrap
      scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
      "
              style={{ WebkitOverflowScrolling: "touch" }} // iOS smooth scroll
            >
              {openTabs.map((tab, index) => (
                <Tab
                  key={index}
                  className="
          relative px-4 py-2 text-green-900 rounded-t-md inline-block
          hover:bg-base-300 cursor-pointer
          ">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500">{tab.icon}</span>
                    {tab.tabTitle}
                    <button
                      onClick={(e) => handleClose(e, index)}
                      className="text-xs text-red-500   md:block cursor-pointer">
                      ✕
                    </button>
                  </div>
                </Tab>
              ))}
            </TabList>

            <div
              className="h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] md:overflow-y-scroll overflow-x-hidden"
              style={{ minWidth: 0 }}>
              {openTabs.map((tab, index) => (
                <TabPanel className="pl-5  mt-2" key={index}>
                  {tab.tabContent}
                </TabPanel>
              ))}
            </div>
          </Tabs>
        ) : (
          <DefaultContent />
        )}
      </div>
    </>
  );
};

export default TabsComponent;
