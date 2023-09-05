import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Button, Modal } from "antd";
import Contacts from "../pages/Contacts";

const menuA = [
  {
    id: 1,
    title: "Home",

    link: "/",
  },
  {
    id: 2,
    title: "Resume",
    link: "/resume",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "About Me",
    link: "/about",
  },
];
export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between lg:px-10 pt-5 navbar">
      <div></div>
      <nav className="flex">
        {menuA?.map((list, index) => {
          return (
            <CustomLink to={list.link} key={index}>
              {list.title}
            </CustomLink>
          );
        })}
        <li onClick={showModal} className="">
          Contacts
        </li>
      </nav>
      <Modal
        title={<h1 className="text-center uppercase">Contacts Details </h1>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="resume_container">
          <div>
            <Contacts />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="">
        {children}
      </Link>
    </li>
  );
}
