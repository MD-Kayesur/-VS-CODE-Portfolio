import { useLocation, useNavigate } from "react-router-dom";

### আমরা react-router-dom থেকে দুটি hook নিচ্ছি: 

useLocation() → বর্তমানে ইউজার কোন path-এ আছে তা জানার জন্য। 
useNavigate() → কোড দিয়ে route (path) পরিবর্তন করার জন্য। 

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

### react-tabs লাইব্রেরি থেকে প্রয়োজনীয় ট্যাব কম্পোনেন্টগুলো নিচ্ছি:

<Tabs>: ট্যাব সিস্টেমের মূল কনটেইনার 
<TabList>: সব ট্যাব বাটন যেখানে থাকে 
<Tab>: প্রতিটি ট্যাব বাটন 
<TabPanel>: প্রতিটি ট্যাবের কনটেন্ট

import "react-tabs/style/react-tabs.css";

### এই লাইনে react-tabs এর ডিফল্ট CSS ইমপোর্ট করা হয়েছে যাতে ট্যাবগুলো স্টাইল পায়।

import { tabs } from "../../utils/data/tabs.data";

### বাইরে থেকে (একটি আলাদা ফাইল থেকে) tabs নামের একটি অ্যারে ডেটা ইমপোর্ট করা হচ্ছে, যেটা প্রতিটি ট্যাবের title, content ও path ধারণ করে।

const TabsComponent = () => {

### এটা হচ্ছে মূল React ফাংশনাল কম্পোনেন্ট।

const location = useLocation();
const navigate = useNavigate();

### এই দুটি হুক দিয়ে:

location থেকে আমরা current URL path জানবো
navigate দিয়ে tab change এর সময় নতুন path-এ পাঠাবো
const selectedIndex = tabs.findIndex((tab) => tab.path === location.pathname);

### এখানে আমরা tabs অ্যারেতে খুঁজে বের করছি কোন ট্যাবের path বর্তমান URL এর path এর সাথে মিলে।

যেমন: যদি location.pathname === "/skill" হয়, তাহলে index 1 রিটার্ন হবে।

const handleSelect = (index) => {
navigate(tabs[index].path);
};

### যখন ইউজার কোনো ট্যাবে ক্লিক করবে, তখন handleSelect() ফাংশন চলে,

এবং সেটি navigate() দিয়ে ঐ ট্যাবের path-এ পাঠিয়ে দেয়।

return (
<Tabs
className="w-11/12 mx-auto"
selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
onSelect={handleSelect}>

### এখানে <Tabs> কম্পোনেন্ট:
className: Tailwind দিয়ে স্টাইল দেওয়া
selectedIndex: কোন ট্যাব active থাকবে, সেটা আমরা URL এর ভিত্তিতে ঠিক করেছি
onSelect: ট্যাব চেঞ্জ হলে handleSelect() কল হয়

      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.tabTitle}</Tab>
        ))}
      </TabList>

### এখানে আমরা tabs অ্যারে থেকে প্রতিটি ট্যাব বানাচ্ছি।

tab.tabTitle হচ্ছে ট্যাবের নাম (যেমন: About, Skill)

      {tabs.map((tab, index) => (
        <TabPanel className="ml-3" key={index}>
          {tab.tabContent}
        </TabPanel>
      ))}

### এখানে প্রতিটি ট্যাবের জন্য একটি করে <TabPanel> তৈরি করা হচ্ছে।

tab.tabContent হচ্ছে ঐ ট্যাবের ভিতরের কনটেন্ট।
    </Tabs>
);
};

### ট্যাব সিস্টেমের শেষ অংশ। সব কিছু <Tabs> এর ভিতরে।

export default TabsComponent;

### এই লাইন দিয়ে কম্পোনেন্টটিকে এক্সপোর্ট করা হচ্ছে যাতে অন্য ফাইল থেকে এটা ব্যবহার করা যায়।

✅ সংক্ষেপে:
এই TabsComponent:
current path দেখে কোন tab active তা ঠিক করে
ট্যাব সিলেক্ট করলে URL পরিবর্তন করে
সব কিছু dynamic tabs data দিয়ে render করে
