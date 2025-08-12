### ১: ইমেজ আর দরকারি লাইব্রেরি ইম্পোর্ট করা
 
import img from '../assets/imgs/1749660883197-removebg-preview.png'
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { useEffect } from "react";

তোমার ইমেজটি নিয়ে আসা হলো, যেটা কাস্টম কার্সারের মধ্যে দেখাবে।
framer-motion থেকে দরকারি ফাংশনগুলো ইম্পোর্ট করছো:
motion: যেকোন React এলিমেন্টে অ্যানিমেশন দিতে।
useMotionValue: মাউসের পজিশন ট্র্যাক করার জন্য ভ্যালু।
useSpring: মসৃণ স্প্রিং এফেক্টের অ্যানিমেশন।
useAnimation: নিজে থেকে অ্যানিমেশন চালানোর নিয়ন্ত্রণ।
React এর useEffect নিয়ে আসা হলো, যা সাইড ইফেক্ট করার জন্য।

### ২: React কম্পোনেন্ট ডিফাইন করা
 
const FluidCursor = ({ size = 150, children }) => {

FluidCursor নামের একটি ফাংশনাল কম্পোনেন্ট।
এটা size নামে প্রপ পাবে, ডিফল্ট ১৫০ পিক্সেল।
children পাবে, অর্থাৎ ভিতরে অন্য JSX এলিমেন্টগুলো দেখানোর জন্য।

### ৩: মাউসের X এবং Y পজিশন ট্র্যাক করার জন্য মূভমেন্ট ভ্যালু তৈরি
 
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

মাউসের X ও Y পজিশনের জন্য motion value তৈরি করলাম।

শুরুতে -size এ আছে, অর্থাৎ স্ক্রিনের বাইরে (কারণ কার্সার শুরুতে দেখা যাবে না)।

### ৪: মসৃণ মুভমেন্টের জন্য স্প্রিং এফেক্ট যোগ করা
 
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

স্প্রিং ব্যবহার করে মাউসের মুভমেন্টে ঝাঁকুনি কমানো হচ্ছে।
stiffness আর damping দিয়ে স্প্রিংয়ের ঝাঁকুনি আর স্লোতার পরিমাণ নিয়ন্ত্রণ।

### ৫: ক্লিক এফেক্ট নিয়ন্ত্রণ করার জন্য অ্যানিমেশন কন্ট্রোলার
 
  const controls = useAnimation();
controls দিয়ে আমরা ক্লিক করলে অ্যানিমেশন শুরু বা বন্ধ করতে পারবো।

### ৬: মাউস মুভমেন্ট লিসেন করা আর ভ্যালু আপডেট করা
 
  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, size]);

যখন মাউস চলে:
mouseX আর mouseY আপডেট হচ্ছে মাউসের বর্তমান পজিশনে।
size/2 বিয়োগ করার কারণ, কার্সারকে সেন্টারে রাখতে।
যখন কম্পোনেন্ট আনমাউন্ট হবে, তখন ইভেন্ট লিসেনার সরানো হবে (মেমরি লিক না হয় এজন্য)।

### ৭: ক্লিক করলে অ্যানিমেশন শুরু করার ফাংশন
 
  const handleClick = () => {
    controls.start({
      scale: [1, 2.5, 0],        // ছোট থেকে বড় হয়ে শেষে অদৃশ্য
      opacity: [0.7, 0.4, 0],    // হালকা থেকে অদৃশ্য হওয়া
      transition: { duration: 0.6, ease: "easeOut" },
    });
  };

ক্লিক করলে কার্সার একটু বড় হবে এবং ধীরে ধীরে অদৃশ্য হয়ে যাবে।

### ৮: মেইন কন্টেইনার ডিভ রেন্ডার আর ক্লিক হ্যান্ডলার বসানো
 
  return (
    <div className="relative w-full h-full overflow-hidden" onClick={handleClick}>
পুরো স্ক্রিন জুড়ে একটি ডিভ।
ক্লিক করলে উপরের handleClick ফাংশন চালু হবে।

### ৯: কার্সার মুভমেন্টের জন্য ফলো করা এলিমেন্ট
 
      <motion.div
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
        }}
        className="pointer-events-none fixed z-50 rounded-full flex items-center justify-center"
      >

কার্সার হলো একটি গোলাকার এলিমেন্ট।
left আর top পজিশন স্প্রিং এর মাধ্যমে মসৃণ মুভমেন্ট করছে।
স্ক্রিনের ওপর ফিক্সড, সবচেয়ে উপরে (z-50)।
ক্লিক বা হোভার ইভেন্ট নেয় না (pointer-events-none)।

### ১০: রংধনু প্যাটার্নের ব্যাকগ্রাউন্ড
 
        <div
          className="absolute w-full h-full rounded-full blur-2xl opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
          }}
        />

কার্সারের ভিতর বড় গোলাকার রংধনুর কনসিক গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড।
একটু ব্লার আর হালকা অপাসিটি দেয়া হয়েছে।

### ১১: ক্লিকের সময় অ্যানিমেট হওয়া ব্যাকগ্রাউন্ড
 
        <motion.div
          animate={controls}
          initial={{ scale: 0, opacity: 0 }}
          className="absolute w-full h-full rounded-full blur-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
          }}
        />

এটা ক্লিক করার পর বড় হয়ে ধীরে ধীরে মুছে যাবে।
শুরুতে দেখা যায় না (scale: 0, opacity: 0)।

### ১২: কার্সারের মধ্যে তোমার ইমেজ দেখানো
 
        <span className="relative drop-shadow-lg animate-wave inline-flex items-center justify-center">
          <img
            src={img}
            alt="Icon"
            className="w-10 h-10 object-contain"
          />
        </span>
কার্সারের মাঝখানে ইমেজ টা আসবে।
ড্রপ শ্যাডো আর ওয়েভ এনিমেশন থাকতে পারে।
সাইজ ৪০x৪০ পিক্সেল।

### ১৩: কার্সার ডিভ শেষ করা আর children রেন্ডার করা
 
      </motion.div>
      {children}
    </div>
  );
};

কার্সারের ডিভ বন্ধ করা হলো।
ভিতরে থাকা অন্য JSX এলিমেন্টগুলো দেখানো হলো।
মেইন কন্টেইনার বন্ধ করা হলো।

### ১৪: কম্পোনেন্ট এক্সপোর্ট করা
 
export default FluidCursor;
তোমার কম্পোনেন্ট অন্য ফাইলে ব্যবহার করার জন্য এক্সপোর্ট করা হলো।