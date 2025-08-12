//  import img from '../assets/imgs/1749660883197-removebg-preview.png'

//  import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const FluidCursor = ({ size = 150, children }) => {
//   const mouseX = useMotionValue(-size);
//   const mouseY = useMotionValue(-size);

//   const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

//   const controls = useAnimation();

//   useEffect(() => {
//     const move = (e) => {
//       mouseX.set(e.clientX - size / 2);
//       mouseY.set(e.clientY - size / 2);
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, [mouseX, mouseY, size]);

//   const handleClick = () => {
//     controls.start({
//       scale: [1, 2.5, 0],        // ছোট থেকে বড়, পরে ফেইড আউট
//       opacity: [0.7, 0.4, 0],    // একটু ফিকে হয়ে শেষ পর্যন্ত অদৃশ্য
//       transition: { duration: 0.6, ease: "easeOut" },
//     });
//   };

//   return (
//     <div className="relative w-full h-full overflow-hidden" onClick={handleClick}>
//       <motion.div
//         style={{
//           left: springX,
//           top: springY,
//           width: size,
//           height: size,
//         }}
//         className="pointer-events-none fixed z-50 rounded-full flex items-center justify-center"
//       >
//         {/* Wavy RGB background with spreading click effect */}
//         <motion.div
//           animate={controls}
//           initial={{ scale: 1, opacity: 0.7 }}
//           className="absolute w-full h-full rounded-full blur-2xl"
//           style={{
//             background:
//               "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
//           }}
//         />

//         {/* Wavy Text */}
//         <span className="relative drop-shadow-lg animate-wave inline-flex items-center justify-center">
//   <img
//     src={img}
//     alt="Icon"
//     className="w-10 h-10 object-contain"
//   />
// </span>
//       </motion.div>

//       {children}
//     </div>
//   );
// };

// export default FluidCursor;

 


 


import img from '../assets/imgs/1749660883197-removebg-preview.png'

import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { useEffect } from "react";

const FluidCursor = ({ size = 150, children }) => {
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const controls = useAnimation();

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, size]);

  const handleClick = () => {
    controls.start({
      scale: [1, 2.5, 0],
      opacity: [0.7, 0.4, 0],
      transition: { duration: 0.6, ease: "easeOut" },
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden" onClick={handleClick}>
      <motion.div
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
        }}
        className="pointer-events-none fixed z-50 rounded-full flex items-center justify-center"
      >
        {/* Static background - always visible */}
        <div
          className="absolute w-full h-full rounded-full blur-2xl opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
          }}
        />

        {/* Animated click effect - appears only on click */}
        <motion.div
          animate={controls}
          initial={{ scale: 0, opacity: 0 }}
          className="absolute w-full h-full rounded-full blur-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
          }}
        />

        {/* Image */}
        {/* <span className="relative drop-shadow-lg animate-wave inline-flex items-center justify-center">
          <img
            src={img}
            alt="Icon"
            className="w-10 h-10 object-contain"
          />
        </span> */}
      </motion.div>

      {children}
    </div>
  );
};

export default FluidCursor;


 
