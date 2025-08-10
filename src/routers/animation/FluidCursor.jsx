// FluidCursor.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const FluidCursor = ({ size = 150, children }) => {
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  // Smooth follow motion
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, size]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fluid RGB animated cursor */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
        }}
        className="pointer-events-none fixed z-50 rounded-full opacity-50 blur-2xl"
      >
        <div
          className="w-full h-full rounded-full animate-rgb-spin"
          style={{
            background:
              "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)",
          }}
        />
      </motion.div>

      {/* Children content */}
      {children}
    </div>
  );
};

export default FluidCursor;
