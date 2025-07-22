✅ ১. Imports
js
Copy
Edit
import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { tabs as allTabs } from "../../utils/data/tabs.data";
🔹 react-tabs দিয়ে tab তৈরি করা হচ্ছে।
🔹 react-router-dom দিয়ে navigation handle করা হচ্ছে।
🔹 tabs.data.js ফাইলে সব tab এর static data রাখা আছে, সেগুলো allTabs নামে নিয়েছো।

✅ ২. State Initialization
js
Copy
Edit
const [openTabs, setOpenTabs] = useState([]);
🔹 এখানে openTabs state দিয়ে তুমি dynamically কোন কোন tab এখন খোলা আছে সেটা রাখছো।
🔹 Initially খালি array, মানে কোনো tab খোলা নাই।

✅ ৩. useEffect → URL দেখে Tab খুলে
js
Copy
Edit
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
🔸 যখন route (URL path) চেঞ্জ হয়:

সেটা allTabs থেকে খুঁজে বের করে

যদি ওই tab আগে খোলা না থাকে → openTabs এ add করে

যদি আগেই খোলা থাকে → কিছুই করে না

📌 এটা মূলত sidebar/left button ক্লিক করলে tab auto-open করার জন্য দরকার।

✅ ৪. কোন tab এখন active সেটি বের করা
js
Copy
Edit
const selectedIndex = openTabs.findIndex((tab) => tab.path === location.pathname);
🔹 selectedIndex বের করে active tab কোনটা সেটা determine করা হয়।

✅ ৫. Tab select করলে navigate করে
js
Copy
Edit
const handleSelect = (index) => {
  navigate(openTabs[index].path);
};
🔹 কোন tab এ ক্লিক করলে corresponding path এ যাওয়া হয়।

✅ ৬. Tab ক্লোজ করার function
js
Copy
Edit
const handleClose = (e, index) => {
  e.stopPropagation();
  const closedTab = openTabs[index];
  const newTabs = openTabs.filter((_, i) => i !== index);
  setOpenTabs(newTabs);

  if (closedTab.path === location.pathname) {
    if (newTabs.length > 0) {
      navigate(newTabs[Math.max(0, index - 1)].path);
    } else {
      navigate("/"); // fallback
    }
  }
};
🔹 Tab এর পাশে cross (✕) ক্লিক করলে:

ওই tab openTabs থেকে remove হয়

যদি remove করা tab-টাই এখন active থাকে → তাহলে বাকি tab গুলোর মধ্যে প্রথমটাতে নিয়ে যায়

কোনো tab না থাকলে → fallback route / এ চলে যায়

✅ ৭. Return JSX (UI part)
jsx
Copy
Edit
<Tabs
  className="..."
  selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
  onSelect={handleSelect}
>
  <TabList className="...">
    {openTabs.map((tab, index) => (
      <Tab key={index} className="...">
        <div className="flex items-center gap-2">
          {tab.tabTitle}
          <button onClick={(e) => handleClose(e, index)}>✕</button>
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
🔹 TabList → dynamically render করে সব খোলা tab এর title আর ✕
🔹 TabPanel → corresponding content দেখায়
🔹 overflow-y-auto → অনেক content হলে scroll হবে
🔹 Tailwind CSS দিয়ে সব styling করছো

✅ Bonus: Overall Flow
mathematica
Copy
Edit
Sidebar click → URL change → useEffect fire → Tab খোলে 
→ Tab click → navigate 
→ Tab ✕ → remove from UI & navigate fallback 
