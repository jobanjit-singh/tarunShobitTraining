import React from "react";
import "./styles.css";
import ASSETS from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import { IoAirplaneSharp } from "react-icons/io5";

export default function CustomNavbar() {
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

  return (
    <div className="navbarBaseContainer">
      <div className="navbarLogoContainer">
        <div className="navbarLogoBaseContainer">
          {/* <img src={ASSETS.mainLogo} alt="main-logo" /> */}
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
    </div>
  );
}
