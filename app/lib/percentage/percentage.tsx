"use client";
import { motion as m, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Monospaced from "../components/typography/monospaced";
import copywriting from "../copywriting/copywriting";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 75, damping: 50 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toString().padStart(2, "0"),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <m.span>{display}</m.span>;
}

export default function Percentage() {
  const progressNumber = copywriting.progressNumber;

  return (
    <m.div
      initial={{ opacity: 0.25, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ stiffness: 100, damping: 30, type: "spring" }}
      className="-my-xl flex items-baseline text-neutral-900"
    >
      <Monospaced className="text-xxl">
        <AnimatedNumber value={progressNumber} />
      </Monospaced>
      <p className="text-xl">%</p>
    </m.div>
  );
}
