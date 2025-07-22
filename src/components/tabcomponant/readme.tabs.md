 
 
import { useLocation, useNavigate } from "react-router-dom";
## React Router থেকে দুইটা জিনিস নেওয়া হয়েছে:

useLocation: ইউআরএল (URL) এর বর্তমান অবস্থান (path) জানার জন্য।

useNavigate: প্রোগ্রামিং এর মাধ্যমে ইউআরএল পরিবর্তন (navigate) করার জন্য।

 
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
## এগুলো react-tabs লাইব্রেরি থেকে নেওয়া।

Tabs: পুরো ট্যাব সিস্টেমের container।

TabList: ট্যাব বাটন গুলার লিস্ট রাখে।

Tab: প্রতিটা individual ট্যাব।

TabPanel: যেই content দেখাবে, যখন ট্যাব সিলেক্ট করা হবে।

CSS ফাইলটা ট্যাবের স্টাইলিং এর জন্য ইম্পোর্ট করা হয়েছে।

 
import { useEffect, useState } from "react";
import { tabs as allTabs } from "../../utils/data/tabs.data";
## useState এবং useEffect হচ্ছে React এর বিল্ট-ইন হুক।
## tabs.data.js ফাইল থেকে ট্যাবের ডেটা allTabs নামে ইম্পোর্ট করা হয়েছে।

 
const DefaultContent = () => (
  <div className="text-center text-gray-500 text-lg mt-20">
    👋 Welcome! Please select a tab to get started.
  </div>
);

## এটা একটা ছোট কম্পোনেন্ট। যদি কোনো ট্যাব ওপেন না থাকে, তখন ইউজারকে দেখাবে:
“Welcome! Please select a tab to get started.”

 
const TabsComponent = () => {
## এটিই মূল Component – যেখানে সব Tab রিলেটেড কাজ হচ্ছে।

 
  const location = useLocation();
  const navigate = useNavigate();
  const [openTabs, setOpenTabs] = useState([]);
## location: ইউআরএল এর বর্তমান লোকেশন রাখে।
## navigate: ট্যাব সিলেক্ট করলে রাউট পরিবর্তনের জন্য।
## openTabs: একটি অ্যারে, যেখানে ইউজার কোন ট্যাবগুলো ওপেন করেছে তা রাখা হয়।

useEffect: ট্যাব খুলে ফেলার জন্য URL অনুযায়ী
 
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
## যখন ইউআরএল পরিবর্তন হয় (location.pathname), তখন চেক করে ওই পাথে কোনো ট্যাব আছে কিনা।

## যদি থাকে, এবং আগেই খোলা না থাকে, তাহলে openTabs এর মধ্যে নতুন করে যোগ করে।

 
  const selectedIndex = openTabs.findIndex(
    (tab) => tab.path === location.pathname
  );
## ইউজার বর্তমানে যেই ট্যাব এ আছে, তার ইনডেক্স খুঁজে বের করে – যাতে ওইটা সিলেক্ট করা যায়।

 
  const handleSelect = (index) => {
    navigate(openTabs[index].path);
  };
## যখন ইউজার কোনো ট্যাব ক্লিক করে, তখন সেই ট্যাবের path এ navigate করে পাঠিয়ে দেয়।

Tab Close করা
 
  const handleClose = (e, index) => {
    e.stopPropagation();
    const closedTab = openTabs[index];
    const newTabs = openTabs.filter((_, i) => i !== index);
    setOpenTabs(newTabs);
## ইউজার ✕ ক্লিক করলে, ওই ট্যাবটা openTabs থেকে মুছে ফেলে।
## e.stopPropagation() ব্যবহার করে যাতে ট্যাব ক্লিক ইভেন্ট ট্রিগার না হয়।

 
    if (closedTab.path === location.pathname) {
      if (newTabs.length > 0) {
        navigate(newTabs[Math.max(0, index - 1)].path);
      } else {
        navigate("/");
      }
    }
  };
## যদি ইউজার যেই ট্যাব দেখতেছে, সেইটা বন্ধ করে —
তাহলে আগের ট্যাব দেখাবে বা fallback রুটে পাঠাবে (/)।

রেন্ডারিং অংশ:
 
  return (
    <div className="w-11/12 mx-auto h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
## ট্যাব কম্পোনেন্টের wrapper, height responsive ভাবে দেয়া হয়েছে।

যদি ট্যাব খোলা থাকে
 
      {openTabs.length > 0 ? (
        <Tabs
          selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
          onSelect={handleSelect}
        >
## যদি কোনো ট্যাব খোলা থাকে তাহলে <Tabs> দেখাবে।

Tab Header
 
          <TabList className="border-none w-full cursor-pointer -mt-1 bg-red-400 flex space-x-1 px-2">
            {openTabs.map((tab, index) => (
              <Tab key={index} className="relative px-4 py-2 bg-white rounded-t-md">
                <div className="flex items-center gap-3">
                  {tab.tabTitle}
                  <button
                    onClick={(e) => handleClose(e, index)}
                    className="text-xs text-gray-500 hover:text-red-500 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </Tab>
            ))}
          </TabList>
## ওপেন হওয়া ট্যাবগুলা দেখায়।
## প্রতিটা ট্যাবের পাশে ✕ বাটন থাকে — ক্লিক করলে বন্ধ হয়।

Tab Content
 
          <div className="h-[490px] overflow-y-auto p-4">
            {openTabs.map((tab, index) => (
              <TabPanel className="ml-3" key={index}>
                {tab.tabContent}
              </TabPanel>
            ))}
          </div>
        </Tabs>
## প্রতিটা ট্যাবের জন্য কনটেন্ট দেখানো হয়।
## স্ক্রল করার জন্য overflow-y-auto রাখা হয়েছে।

যদি কোনো ট্যাব না খোলা থাকে
 
      ) : (
        <DefaultContent />
      )}
## কোনো ট্যাব খোলা না থাকলে DefaultContent কম্পোনেন্ট দেখায়।

 
  );
};

export default TabsComponent;
## কম্পোনেন্ট এক্সপোর্ট করা হয়েছে যাতে অন্যখানে ব্যবহার করা যায়।

