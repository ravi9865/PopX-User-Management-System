import React, { useEffect, useState } from "react";
import Header from "./Header";
import Img1 from "../assets/images/Ellipse 114/Ellipse 114.png";
const AccountSettingsPage = () => {
  const [name, setName] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry@Gmail.com");

  const storedData = localStorage.getItem("formData");
  const data = JSON.parse(storedData);

  useEffect(() => {
    window.scrollTo(0, 0);
    setName(data.fullName);
    setEmail(data.email);
  }, []);

  return (
    <>
      <Header />
      <div className="userProfile">
        <div className="profilePictureAnduserInfo">
          <div className="imageSection">
            <img src={Img1} alt="Profile-Images" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="23"
              viewBox="0 0 21 23"
            >
              <g
                id="Group_1585"
                data-name="Group 1585"
                transform="translate(0.229 -0.182)"
              >
                <ellipse
                  id="Ellipse_115"
                  data-name="Ellipse 115"
                  cx="10.5"
                  cy="11.5"
                  rx="10.5"
                  ry="11.5"
                  transform="translate(-0.229 0.182)"
                  fill="#6c25ff"
                />
                <path
                  id="noun-camera-5308825"
                  d="M115.254,89.363h-2.169l-.572-1.346a.9.9,0,0,0-.291-.377.7.7,0,0,0-.415-.14h-2.571a.706.706,0,0,0-.4.146.9.9,0,0,0-.282.371l-.591,1.346h-2.169a.733.733,0,0,0-.558.273,1.024,1.024,0,0,0-.231.659v6.521a1.024,1.024,0,0,0,.231.659.733.733,0,0,0,.558.273h9.464a.733.733,0,0,0,.558-.273,1.024,1.024,0,0,0,.231-.659V90.295a1.024,1.024,0,0,0-.231-.659.733.733,0,0,0-.558-.273Zm-4.732,6.52a2.2,2.2,0,0,1-1.673-.818,3.164,3.164,0,0,1,0-3.952,2.119,2.119,0,0,1,3.346,0,3.164,3.164,0,0,1,0,3.952A2.2,2.2,0,0,1,110.522,95.884Zm1.577-2.795a2.046,2.046,0,0,1-.462,1.317,1.413,1.413,0,0,1-2.231,0,2.109,2.109,0,0,1,0-2.635,1.413,1.413,0,0,1,2.231,0A2.046,2.046,0,0,1,112.1,93.089Z"
                  transform="translate(-100.248 -81.086)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div className="userInfo">
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
        <div className="userInformation">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur adipiscing elit. Sed diam
            nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </div>
    </>
  );
};
export default AccountSettingsPage;
