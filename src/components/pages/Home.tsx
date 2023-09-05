import React from "react";
import {
  FacebookFilled,
  LinkedinFilled,
  MailOutlined,
  MailFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export const Home = () => {
  
  return (
    <div className="lg:px-10 lg:py-5 lg:mt-20">
      {/* <DarkModeToggle /> */}

      <div className="flex justify-between home-page">
        <div>
          <div className="title lg:mt-20">
            <h1 className="flex flex-col font-bold uppercase">
              <span> Hello,</span>
              <span> I'm Jebutu Blessing</span>
            </h1>
          </div>
          <div>
            <h3 className="text-[#FDFDFD] role font-bold lg:text-[26x] mt-3 mb-10 leading-widest">
              Accountant, Finance Officer, Internal Audit/Control
            </h3>
            <p className="passage lg:text-[16px] sm:text=[12px] leading-relaxed lg:w-[38em]  mt-5 tracking-relaxed mb-10">
              A Driven accountant with over five years of experience
              specializing in accounting, auditing, budgeting, and performance
              management. Advanced knowledge of generally accepted accounting
              principles and practices. Fosters transparency, understanding, and
              ownership of financial reports and financial and operational
              metrics across the organization—a thorough knowledge of applicable
              laws, regulations, public finance, and external reporting.
            </p>
            <footer className="">
              <div className="profile-pics flex text-[16px] text-gray-300">
                <div className="socials flex pr-3 mt-5">
                  <a
                    href="https://www.linkedin.com/in/blessing-oreofe"
                    className="flex"
                  >
                    <LinkedinFilled className="mr-2 rounded-full" />
                    LinkedIn
                  </a>
                </div>
                <div className="socials flex pr-3 mt-5">
                  <a
                    href="https://www.facebook.com/jebutu.blessing"
                    className="flex"
                  >
                    <FacebookFilled className="mr-2 mt-1 rounded-full" />
                    Facebook
                  </a>
                </div>
                <div className="socials flex pr-3 mt-5">
                  <a href="">
                    <MailFilled className="rounded-full mr-2" />
                    Email
                    {/* <span className=""> Email</span> */}
                  </a>
                </div>
                <div className="socials flex mt-5">
                  <a href="https://twitter.com/">
                    <TwitterSquareFilled className="mr-2" />
                    Twitter
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="frame">
          <img src="./assets/images/jebu-img.jpeg" className="cover" alt="" />
        </div>
      </div>
    </div>
  );
};
