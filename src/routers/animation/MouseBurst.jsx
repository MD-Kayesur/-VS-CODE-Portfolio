import { useEffect, useState, useRef } from "react"; //useState: Burst ইফেক্ট ট্র্যাক করার জন্য।
// useRef: interval ধরে রাখতে যাতে মাউস চেপে রাখলে বারবার burst হয়।

import { motion, AnimatePresence } from "framer-motion";
import rainbowImage from "../../assets/imgs/1749660883197-removebg-preview.png";

const MouseBurst = () => {
  // এখানে আমরা burst গুলোর ডেটা রাখছি। প্রতিটি ক্লিক বা ইফেক্ট হচ্ছে একটা object — যেখানে x, y পজিশন এবং unique id থাকে।
  const [clicks, setClicks] = useState([]);
  // আমরা এখানে একটা ref ব্যবহার করছি যাতে mousedown ধরে রাখলে বারবার burst trigger করা যায়।
  const intervalRef = useRef(null);

  // startBurst() ফাংশনটি:

  // ইউজারের মাউস ক্লিক পজিশন (x, y) নিচ্ছে।

  // সেই পজিশনে burst effect trigger করছে।

  // ১ সেকেন্ড পরে সেটি remove করছে যাতে পুরনো ইমেজ রয়ে না যায়।
  const startBurst = (e) => {
    const { clientX, clientY } = e;

    const newClick = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
    };

    setClicks((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClicks((prev) => prev.filter((item) => item.id !== newClick.id));
    }, 1000);
  };

  //   মাউস ক্লিক করলে একবার burst হয়, তারপর ১৫০ms পর পর হয়ে চলতে থাকে যতক্ষণ চেপে রাখা হয়।
  // ছেড়ে দিলে clearInterval করে বন্ধ করে দেয়।
  // clean-up করা হয় যাতে memory leak না হয়।

  useEffect(() => {
    const handleMouseDown = (e) => {
      startBurst(e); // প্রথম ক্লিকেই একবার burst

      intervalRef.current = setInterval(() => {
        startBurst(e);
      }, 150); // প্রতি 150ms-এ burst হবে যতক্ষণ চেপে রাখা হয়
    };

    const handleMouseUp = () => {
      clearInterval(intervalRef.current);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  //  প্রতিবার burst এ কতগুলো image ছড়িয়ে যাবে সেটি নির্ধারণ করা হয়েছে — এখানে ১০টি।
  const particles = 1;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* একটি full-screen container তৈরি করা হয়েছে যেখানে ইমেজ গুলো position হবে।
      pointer-events-none মানে এটি ক্লিক ব্লক করবে না। */}
      <AnimatePresence>
        {clicks.map((click) =>
          Array.from({ length: particles }).map((_, i) => {
            const angle = (360 / particles) * i;
            const radius = 100;
            const radian = (angle * Math.PI) / 180;

            const dx = Math.cos(radian) * radius;
            const dy = Math.sin(radian) * radius;
            // এখানে প্রতিটি ইমেজ নির্দিষ্ট angle এ ছড়িয়ে পড়বে।
            // dx, dy — x/y অক্ষ বরাবর move করবে।
            // এটি radial burst তৈরি করে (গোল আকারে চারপাশে ছড়িয়ে পড়ে)।
            return (
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
              // motion.img দিয়ে প্রতিটি ইমেজ animate হচ্ছে। 
              // initial: শুরুতে কোথায় থাকবে। 
              // animate: কোথায় যাবে (burst effect)। 
              // exit: opacity 0 মানে invisible করে দিচ্ছে। 
              // transition: smooth ease out animation।
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default MouseBurst;
// Globally Use kora
{/* <StrictMode>
    <MouseBurst></MouseBurst>
    <RouterProvider router={router} />
  </StrictMode>, */}
