import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rainbowImage from "../assets/imgs/1749660883197-removebg-preview.png";

const MouseBurst = () => {
  const [clicks, setClicks] = useState([]);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    const handleMouseDown = (e) => {
      startBurst(e);

      intervalRef.current = setInterval(() => {
        startBurst(e);
      }, 150);
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

  const particles = 1;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <AnimatePresence>
        {clicks.map((click) =>
          Array.from({ length: particles }).map((_, i) => {
            const angle = (360 / particles) * i;
            const radius = 100;
            const radian = (angle * Math.PI) / 180;

            const dx = Math.cos(radian) * radius;
            const dy = Math.sin(radian) * radius;

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
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default MouseBurst;
