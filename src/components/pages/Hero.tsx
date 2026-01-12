"use client";
import { HeroIcons, mobileIcons } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h2 className="hero-subheading">Hi, I am</h2>
        <div className="hero-name-container">
          <h1 className="hero-heading">Riya Sharma</h1>
          <p className="hero-title">Software Engineer / FullStack Developer</p>
          {/* <p className="text-xs text-amber-800 font-medium italic z-50">
            Portfolio under development
          </p> */}
        </div>
        <div className="hero-icons">
          {HeroIcons.map((icon, index: number) => (
            <a
              href={icon.link}
              key={index}
              className="hero-icon"
              target={icon.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <Image
                src={icon.iconUrl}
                height={25}
                width={25}
                alt={icon.altText}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/fallback-icon.svg";
                  target.alt = "Fallback Icon";
                }}
              />
            </a>
          ))}
        </div>
        <div className="mobile-skew-container">
          <div className="mobile-skew"></div>
        </div>
        <div className="mobile-skew-container-overlay">
          <div className="mobile-skew-overlay"></div>
        </div>
        <div className="mobile-hero-icons">
          <div className="mobil-hero-icons-container">
            {mobileIcons.map((icon: string, index: number) => {
              return (
                <span key={index} className="hero-icon">
                  <Image src={icon} height={25} width={25} alt="social icon" />
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-bg-skew-container">
          <div className="hero-bg-skew" />
        </div>
        <div className="hero-image-wrapper">
          <Image
            // src={"/user-pic.svg"}
            // src={"/krishna-profile.png"}
            // src={"/krishna-profile-removebg-preview.png"}
            // src={"/profile-pic.png"}
            src={"/profile-picture.jpeg"}
            alt="User Picture"
            width={400}
            height={400}
            className="hero-image "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
