import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import ASSETS from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import { IoAirplaneSharp } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import gsap from "gsap";

export default function CustomNavbar() {
  const sideBarRef = useRef();

  const linkList = [
    {
      title: "Home",
    },
    {
      title: "Services",
    },
    {
      title: "About Us",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Blog",
    },
    {
      title: "FAQs",
    },
  ];

  const handleShowSideBar = () => {
    gsap.to(sideBarRef.current, {
      translateX: "0%",
      opacity: 1,
      duration: 0.5,
    });
  };

  const handleHideSideBar = () => {
    gsap.to(sideBarRef.current, {
      translateX: "-100%",
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <div className="navbarBaseContainer">
      <div className="navbarLogoContainer">
        <div className="navbarLogoBaseContainer">
          {/* <img src={ASSETS.mainLogo} alt="main-logo" /> */}
          <HiOutlineMenuAlt2
            className="navbarMenuIcon"
            onClick={handleShowSideBar}
            size={24}
          />
          <h2>
            Air
            <span
              style={{
                color: "var(--secondaryColor)",
                textDecorationLine: "underline",
              }}
            >
              Wings
            </span>
          </h2>
          <IoAirplaneSharp className="aeroPlaneIcon" size={24} />
        </div>
      </div>
      <div className="navbarLinkContainer">
        {linkList.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
      <div className="navbarProfileContainer">
        <div className="navbarProfileButtonContainer">
          <CustomButton
            title={"Login"}
            color={"var(--secondaryColor)"}
            backgroundColor={"transparent"}
            border={"2px solid var(--secondaryColor)"}
          />
          <CustomButton
            title={"Register"}
            color={"var(--secondaryColor)"}
            backgroundColor={"transparent"}
            border={"2px solid var(--secondaryColor)"}
          />
        </div>
      </div>
      <div className="navBarSideBarBaseContainer" ref={sideBarRef}>
        <div className="navBarSideBarContainer">
          <div className="navBarSideBarIconContainer">
            <h1>
              Air
              <span
                style={{
                  color: "var(--secondaryColor)",
                  textDecorationLine: "underline",
                }}
              >
                Wings
              </span>
            </h1>
            <MdCancel size={30} onClick={handleHideSideBar} />
          </div>
          <div className="navBarSideBarLinkContainer"></div>
        </div>
      </div>
    </div>
  );
}
