
## step
import React from "react";
🔸 এটি React লাইব্রেরি থেকে React কে ইম্পোর্ট করছে। React কম্পোনেন্ট তৈরির জন্য এটা প্রয়োজন।

## step
const CodeWrapper = ({ children, lines = 20 }) => {
🔸 CodeWrapper নামের একটি ফাংশনাল কম্পোনেন্ট তৈরি করা হয়েছে।
🔸 এটি দুইটি ইনপুট (props) নেয়:

children: এই কম্পোনেন্টের ভিতরে যা দেওয়া হবে (যে কম্পোনেন্ট বা কন্টেন্ট তুমি ভিতরে রাখবে),

lines = 20: এটি ডিফল্টভাবে ২০টি লাইন নাম্বার দেখাবে, তবে চাইলে override করতে পারো।

## step
  return (
    <div className="flex bg-[#1e1e1e] text-white font-mono p-6 rounded-lg shadow-md overflow-auto">
🔸 একটি div রিটার্ন করছে যেটি Flexbox Layout।
🔸 নিচের Tailwind CSS ক্লাসগুলো ব্যবহার হয়েছে:

flex: পাশে পাশে বসানোর জন্য (line numbers এবং content).

bg-[#1e1e1e]: ব্যাকগ্রাউন্ড কালার (code editor এর মতো dark background).

text-white: টেক্সট সাদা হবে।

font-mono: Monospace font (কোডের মতো দেখতে হয় বলে)।

p-6: Padding সব পাশে।

rounded-lg: কর্নার গুলো গোলাকার।

shadow-md: মাঝারি shadow effect।

overflow-auto: ভেতরের কন্টেন্ট বড় হলে স্ক্রল হবে।

## step
      <div className="text-right pr-4 text-gray-500 select-none">
🔸 এটি লাইন নাম্বার দেখানোর জন্য একটি আলাদা ডিভ।

text-right: সংখ্যাগুলো ডান দিকে সাজানো।

pr-4: ডানে প্যাডিং।

text-gray-500: গ্রে কালার টেক্সট (স্লাইটলি হালকা)।

select-none: ইউজার যেন নাম্বার গুলো সিলেক্ট না করতে পারে।

## step
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="h-6">{i + 1}</div>
        ))}
🔸 এখানে Array.from() দিয়ে একটি অ্যারে তৈরি করা হয়েছে যেখানে lines সংখ্যক এলিমেন্ট থাকবে।
🔸 প্রতিটি ইন্ডেক্স (i) থেকে i + 1 করে সংখ্যা দেখানো হচ্ছে (যাতে ১ থেকে শুরু হয়)।
🔸 প্রতিটি নাম্বারের জন্য <div> বানানো হচ্ছে যার উচ্চতা h-6 (এক লাইন সমান)।

## step
      </div>
🔸 এটি লাইন নাম্বার div এর শেষ।

## step
      {/* Content area */}
      <div className="flex-1 whitespace-pre-wrap">{children}</div>
🔸 এটি মূল কন্টেন্টের জায়গা (তুমি যেটা এই CodeWrapper এর ভিতরে দেবে)।

flex-1: যত জায়গা লাগে, ততটা জায়গা নিয়ে নেয়।

whitespace-pre-wrap: নতুন লাইন ও স্পেস হুবহু ধরে রাখে এবং প্রয়োজন হলে wrap করে।

## step
    </div>
  );
};
🔸 প্রধান div এর সমাপ্তি এবং কম্পোনেন্টের রিটার্ন শেষ।

## step
export default CodeWrapper;
🔸 এই কম্পোনেন্টটিকে এক্সপোর্ট করে দেওয়া হয়েছে যাতে অন্য ফাইলে ব্যবহার করা যায়।

✅ সারাংশ (Summary):
এই কম্পোনেন্টটা তৈরি করা হয়েছে যেন তোমার যেকোনো কন্টেন্টের পাশে সুন্দরভাবে লাইন নাম্বারসহ কোড এডিটর-এর মতো লুক দেয়া যায়।





### babohae ar niom

import CodeWrapper from "./CodeWrapper";
🔸 CodeWrapper কম্পোনেন্ট ইমপোর্ট করা হয়েছে।
🔸 এটা সেই কম্পোনেন্ট যেটা লাইন নাম্বারসহ ব্লক তৈরি করে।

## Step
import About from "./About"; // Your About component
🔸 About কম্পোনেন্ট ইমপোর্ট করা হয়েছে — যেখানে তোমার ব্যক্তিগত ইনফো (যেমন Birth Date, Location, Description) আছে।

## Step
export default function Page() {
🔸 একটি ডিফল্ট এক্সপোর্ট করা ফাংশনাল কম্পোনেন্ট Page() তৈরি করা হয়েছে।

## Step
  return (
    <div className="p-10">
🔸 একটি div যার ভিতরে ১০ ইউনিট padding রয়েছে Tailwind CSS দিয়ে।

## Step
      <CodeWrapper lines={25}>
        <About />
      </CodeWrapper>
🔸 CodeWrapper এর ভিতরে About কম্পোনেন্ট রাখা হয়েছে।

🔸 lines={25} মানে লেফট সাইডে ১ থেকে ২৫ পর্যন্ত নাম্বার দেখাবে।

🔸 ফলে, তুমি About কম্পোনেন্টকে এখন লাইন নাম্বার সহ কোড ব্লকের মতো করে প্রেজেন্ট করতে পারো।

## Step
    </div>
  );
}
🔸 কোড ব্লকের ক্লোজিং এবং Page কম্পোনেন্ট শেষ।

✅ ফলাফল (Output কী হবে):
তুমি যখন <Page /> রেন্ডার করবে, তখন এর ভিতরে:

About কম্পোনেন্ট দেখা যাবে

বাম পাশে ২৫টি লাইন নাম্বার থাকবে (১ থেকে ২৫)

সবকিছু হবে কোড ব্লক স্টাইলে — কালো ব্যাকগ্রাউন্ড, সাদা লেখা, monospace font

🔧 টিপস: যদি তোমার About