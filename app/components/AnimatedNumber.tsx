"use client";

import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

interface AnimatedNumberProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  duration = 2,
  className = "",
}: AnimatedNumberProps) {
  const [isInView, setIsInView] = useState(false);
  const [showSlotCounter, setShowSlotCounter] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const parseValue = (val: string | number): number => {
    if (typeof val === "number") return val;
    const str = val.toString();
    const numStr = str.replace(/[^\d.]/g, "");
    return parseFloat(numStr) || 0;
  };

  const getSuffix = (val: string | number): string => {
    if (typeof val === "string") {
      if (val.includes("+")) return "+";
      if (val.includes("%")) return "%";
      if (val.includes("억")) return "억";
      if (val.includes("년")) return "년";
    }
    return "";
  };

  const targetValue = parseValue(value);
  const suffix = getSuffix(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            // 약간의 지연 후 슬롯 카운터 시작
            setTimeout(() => {
              setShowSlotCounter(true);
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isInView]);

  return (
    <span ref={elementRef} className={className}>
      {showSlotCounter ? (
        <SlotCounter
          value={targetValue}
          startValue={0}
          duration={duration}
          autoAnimationStart={true}
          numberSlotClassName={className}
        />
      ) : (
        <span style={{ visibility: "hidden" }}>{value}</span>
      )}
      {suffix && showSlotCounter && (
        <span style={{ marginLeft: "0.1em" }}>{suffix}</span>
      )}
    </span>
  );
}
