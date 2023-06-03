'use client';

import React, { useState } from "react";

// import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
// import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import dashboard from "../../assets/icon/dashboard.png";
// import topUp from "../../assets/icon/top-up.png";
// import customer from "../../assets/icon/value.png";
// import wallet from "../../assets/icon/wallet.png";
// import buying from "../../assets/icon/smartphone.png";
// import sellingLogo from "../../assets/icon/loan.png";
// import futureTradingLogo from "../../assets/icon/stock-market.png";
// import shipingLogo from "../../assets/icon/express-delivery.png";
import carret24Logo from "../../assets/logo/Carratt24-01.png";
import carret24LogoExpand from "../../assets/logo/output-onlinegiftools.gif";
// import { Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "@/GlobalRedux/store";

const routes = [
  {
    path: "/",
    name: "Counter Management",
    icon: <Image src={dashboard} alt="" />,
  },
  
  // {
  //   path: "/products",
  //   name: "Products Management",
  //   icon: <img src={product} alt="" />,
  //   subRoutes: [
  //     {
  //       path: "/productList",
  //       name: "Product List",
  //       icon: <img src={userList} alt="" />,
  //     },
  //     {
  //       path: "/productApprovalList",
  //       name: "Product Approval List",
  //       icon: <img src={productApprove} alt="" />,
  //     },
  //   ],
  // },
  
];

const Sidebar = ({ children }: any) => {
  // console.log("========>>>>>>>>>>",routes);
  const dispatch = useDispatch();

  // const [singleUserData] = useState(
  //   JSON.parse(localStorage.getItem("singleUser"))
  // );

  // console.log("from sidebar ", singleUserData);

  // const { isOpen } = useSelector((state: any) => state.sidebartoggle);
  const isOpen = useSelector((state: RootState) => state.sidebarToggle.isOpen);
  // const { isOpen } = true;

//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // console.log("loggedInUser", loggedInUser.data.attributes);
  // const [setIsOpen] = useState(false);

  // console.log(isOpen);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  //   dispatch(toggleSidebar());
  //   console.log("click");
  // };

  //   const inputAnimation = {
  //     hidden: {
  //       width: 0,
  //       padding: 0,
  //       transition: {
  //         duration: 0.2,
  //       },
  //     },
  //     show: {
  //       width: "140px",
  //       padding: "5px 15px",
  //       transition: {
  //         duration: 0.2,
  //       },
  //     },
  //   };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="flex">
        <motion.div
          animate={{
            width: isOpen ? "455px" : "75px",
            minHeight: "100vh",
            backgroundColor: "#fff",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          // className={loginpage ? `sidebar ` : `sidebar-none`}
        >
          <div className="flex items-center justify-between px-3 py-3 mx-3.5 my-3">
            <AnimatePresence>
              {isOpen && (
                <div
                  // variants={showAnimation}
                  // initial="hidden"
                  // animate="show"
                  // exit="hidden"
                  className="logo"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  
                  <Image
                    style={{width:"40%"}}
                    alt="Remy Sharp"
                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    src={carret24LogoExpand}
                  />
                  {/* <img className="sidbar-header-logo" src={course} alt="" /> */}
                </div>
              )}
            </AnimatePresence>

            <div className="bars">
              {/* <FaBars onClick={toggle} /> */}
              
              {!isOpen && (
                <Stack className="mr-2" direction="row" spacing={5}>
                  {/* <Avatar alt="Remy Sharp" src={user} /> */}
                  <Image
                    alt="Remy Sharp"
                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    src={carret24Logo}
                  />
                </Stack>
                // <img
                //   style={{ width: "100%" }}
                //   src={course}
                //   alt=""
                //   onClick={toggle}
                // />
              )}
            </div>
          </div>
          {/* <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div> */}
          <section className="routes">
            {routes.map((route: any, index) => {
              if (route.subRoutes) {
                return (
                    <SidebarMenu
                        key={index}
                    // setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <Link
                  href={route.path}
                  key={index}
                  className="link"
                  // activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </section>
        </motion.div>

        <main className="sidebar-main-container">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
