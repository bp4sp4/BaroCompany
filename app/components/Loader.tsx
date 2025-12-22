"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css';

interface LoaderProps {
  topLogo?: string;
  bottomLogo?: string;
  centerLogo?: string;
  logoCount?: number;
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ 
  topLogo = '/main/logo_white.png',
  bottomLogo = '/main/logo_white.png',
  centerLogo = '/main/logo_black.png',
  logoCount = 5,
  onComplete
}) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    // 애니메이션 타임라인
    gsap.from(".clip-top, .clip-bottom", {
      duration: 2,
      delay: 1,
      height: "50vh",
      ease: "power4.inOut"
    });

    gsap.to(".marquee", {
      duration: 3.5,
      delay: 0.75,
      top: "50%",
      ease: "power4.inOut"
    });

    gsap.from(".clip-top .marquee, .clip-bottom .marquee", {
      duration: 5,
      delay: 1,
      left: "100%",
      ease: "power3.inOut"
    });

    gsap.from(".clip-center .marquee", {
      duration: 4.5,
      delay: 1,
      opacity: 0.9,
      left: "-100%",
      ease: "power3.inOut"
    });

    gsap.to(".clip-top", {
      duration: 2,
      delay: 6,
      clipPath: "inset(0 0 100% 0)",
      ease: "power4.inOut"
    });

    gsap.to(".clip-bottom", {
      duration: 2,
      delay: 6,
      clipPath: "inset(100% 0 0 0)",
      ease: "power4.inOut"
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
      duration: 1,
      delay: 6,
      backgroundColor: "transparent",
      opacity: 0,
      ease: "power2.inOut"
    });

    gsap.to(".loader", {
      duration: 1,
      delay: 7,
      backgroundColor: "transparent",
      opacity: 0,
      ease: "power2.inOut"
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
      duration: 1,
      delay: 7,
      backgroundColor: "transparent",
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = "none";
        if (onComplete) {
          onComplete();
        }
      }
    });

    // 클린업 함수
    return () => {
      gsap.killTweensOf([
        ".clip-top",
        ".clip-bottom",
        ".clip-center",
        ".marquee",
        ".loader"
      ]);
    };
  }, [onComplete]);

  const renderLogos = (src: string, count: number): React.ReactNode[] => {
    // marquee 효과를 위해 로고를 여러 번 복제
    const totalLogos = count * 3; // 3번 반복하여 무한 반복 효과
    return Array.from({ length: totalLogos }, (_, i) => (
      <img key={i} src={src} alt="logo" />
    ));
  };

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-clip clip-top">
        <div className="marquee">
          <div className="marquee-container">
            {renderLogos(topLogo, logoCount)}
          </div>
        </div>
      </div>
      <div className="loader-clip clip-bottom">
        <div className="marquee">
          <div className="marquee-container">
            {renderLogos(bottomLogo, logoCount)}
          </div>
        </div>
      </div>
      <div className="clip-center">
        <div className="marquee">
          <div className="marquee-container">
            {renderLogos(centerLogo, logoCount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
