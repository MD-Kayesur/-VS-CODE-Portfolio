### Step 1: প্রয়োজনীয় React Hooks এবং লাইব্রেরি Import করা
 
import { useEffect, useState, useRef } from "react";
// React থেকে useEffect, useState, useRef হুকগুলো আনলাম

import { motion, AnimatePresence } from "framer-motion";
// framer-motion থেকে motion ও AnimatePresence এনিমেশন করার জন্য

import rainbowImage from "../assets/imgs/1749660883197-removebg-preview.png";
// Burst ইফেক্টের জন্য ইমেজ ফাইল ইমপোর্ট করলাম
### Step 2: MouseBurst কম্পোনেন্ট ডিফাইন করা
 
const MouseBurst = () => {
  // Functional React কম্পোনেন্ট শুরু
### Step 3: State ও Ref সেটআপ করা
 
const [clicks, setClicks] = useState([]); 
// Burst গুলোর ডাটা রাখার জন্য স্টেট, শুরুতে খালি অ্যারে

const intervalRef = useRef(null); 
// interval এর আইডি রাখার জন্য ref, যাতে পরে বন্ধ করা যায়
### Step 4: Burst তৈরি করার ফাংশন
 
const startBurst = (e) => {
  const { clientX, clientY } = e; 
  // মাউসের X, Y পজিশন নেওয়া

  const newClick = { 
    id: Date.now() + Math.random(), // ইউনিক আইডি
    x: clientX,
    y: clientY,
  };

  setClicks((prev) => [...prev, newClick]); 
  // নতুন burst clicks স্টেটে যোগ করা

  setTimeout(() => {
    setClicks((prev) => prev.filter((item) => item.id !== newClick.id)); 
    // ১ সেকেন্ড পরে burst ডিলিট করা হয় (DOM থেকে সরানোর জন্য)
  }, 1000);
};
### Step 5: useEffect দিয়ে Mouse Events লিসেনার যোগ করা
 
useEffect(() => {
  const handleMouseDown = (e) => {
    startBurst(e); 
    // প্রথম ক্লিকেই burst তৈরি হবে

    intervalRef.current = setInterval(() => {
      startBurst(e); 
      // ১৫০ মিলিসেকেন্ড পর পর burst তৈরি হবে যতক্ষণ মাউস চেপে থাকে
    }, 150);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current); 
    // মাউস ছেড়ে দিলে burst থামানো হবে
  };

  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mouseup", handleMouseUp);

  return () => {
    window.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, []);
### Step 6: কতগুলো Particle তৈরি হবে নির্ধারণ
 
const particles = 1; 
// প্রতিটি burst এ ১টা particle (ছবি) ছড়াবে
Step 7: Burst গুলো Render করা ও Animate করা
৭.১ মূল div ট্যাগ:
jsx
Copy
Edit
<div className="fixed inset-0 z-[9999] pointer-events-none">
fixed: div পুরো স্ক্রিনে স্থির থাকবে, স্ক্রল করলে সরবে না।

inset-0: স্ক্রিনের চারপাশ থেকে একদম কিনারা পর্যন্ত বিস্তৃত।

z-[9999]: অন্য সব উপরের উপরে দেখাবে (উচ্চ z-index)।

pointer-events-none: মাউস ক্লিক বা হোভার এই div-এ লাগবে না, নিচের এলিমেন্টে ক্লিক যাবে।

৭.২ AnimatePresence:
jsx
Copy
Edit
<AnimatePresence>
conditionally render হওয়া এলিমেন্টগুলোর এনিমেশন চালায়।

এখানে burst ইমেজের ইন/আউট অ্যানিমেশন নিয়ন্ত্রণ করে।

৭.৩ ক্লিক ডেটা ম্যাপ করা:
jsx
Copy
Edit
{clicks.map((click) =>
clicks অ্যারের প্রতিটি burst এর জন্য লুপ।

৭.৪ পার্টিকল সংখ্যা অনুযায়ী ইমেজ তৈরি:
jsx
Copy
Edit
Array.from({ length: particles }).map((_, i) => {
প্রতিটি burst এর জন্য নির্ধারিত সংখ্যক ইমেজ তৈরি হয় (এখানে ১)।

### ৭.৫ কোণ ও দূরত্ব নির্ধারণ:
 
const angle = (360 / particles) * i;
const radius = 100;
const radian = (angle * Math.PI) / 180;
প্রতিটি particle কোন angle এ যাবে।

কত দূরে particle যাবে (radius)।

angle ডিগ্রি থেকে রেডিয়ান এ রূপান্তর।

### ৭.৬ x, y এর অফসেট হিসাব:
 
const dx = Math.cos(radian) * radius;
const dy = Math.sin(radian) * radius;
particle কত দূরে এবং কোন দিক দিয়ে সরবে।

### ৭.৭ motion.img এলিমেন্ট রিটার্ন:
jsx
Copy
Edit
<motion.img
  key={`${click.id}-${i}`}
  src={rainbowImage}
  initial={{
    x: click.x,
    y: click.y,
    scale: 0.10,
    opacity: 1,
  }}
  animate={{
    x: click.x + dx,
    y: click.y + dy,
    scale: 1.5,
    opacity: 0,
  }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="absolute w-30 h-30 -translate-x-1/2 -translate-y-1/2 rounded-full"
/>
key: React এর জন্য ইউনিক আইডি।

src: burst ইমেজ।

initial: burst শুরু অবস্থান ও অবস্থা।

animate: শেষ অবস্থা (বড় হওয়া, সরানো, ফেইড হওয়া)।

exit: DOM থেকে ওঠার সময় opacity 0 করা।

transition: এনিমেশন কেমন হবে।

className: পজিশন, সাইজ এবং স্টাইল।

### ৭.৮ div ও AnimatePresence বন্ধ:
 
</AnimatePresence>
</div>

### Step 8: কম্পোনেন্ট Export করা
 
export default MouseBurst;