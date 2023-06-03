'use client';

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar,reverseToggleSidebar } from "@/GlobalRedux/Features/sidebar/sidebarToggleSlice";
import profile from "../../assets/icon/Ellipse 469.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Image from "next/image";
import { RootState } from "@/GlobalRedux/store";
// import { useNavigate } from "react-router-dom";
// import logout from "../../assets/icon/power-off.png";
// import Divider from "@mui/material/Divider";
// import { Fragment } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [token] = useState(
//     JSON.parse(localStorage.getItem("loggedInUser")) || null
//   );

  //   const [singleUserData] = useState(
  //     JSON.parse(localStorage.getItem("singleUser")));

  let [defaultLoader, setDefaultLoader] = useState(false);

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);
  const handleClick = (event: any) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };

  const handleBtnClick = (id: any) => {
    console.log("click", id);
    // dispatch(markAsReadFunc(token?.access_token, id));
  };
  // const { user } = useSelector((state) => state.user);

//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   console.log("loggedInUser", loggedInUser?.data?.email);

  // const { isOpen } = useSelector((state: any) => state.toggleSidebar);
  const isOpen = useSelector((state: RootState) => state.sidebarToggle.isOpen);

  // const { isOpen } = true;

  console.log(isOpen);
  const toggle = () => {
    // menuIcon
    // setIsOpen(!isOpen);
    dispatch(toggleSidebar());
    console.log("click");
  };
  const reverseToggle = () => {
    // menuIcon
    // setIsOpen(!isOpen);
    dispatch(reverseToggleSidebar());
    console.log("click");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload(false);
//     navigate("/login");
//   };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem >Logout</MenuItem>

      <MenuItem onClick={handleMenuClose}></MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // const { loadUnreadNotificationLoading,loadUnreadNotificationData } = useSelector(
  //   (state) => state.loadUnreadNotification
  // );
  // const { isNotificationReaded } = useSelector(
  //   (state) => state.readNotification
  // );
  // console.log("loadUnreadNotificationData", loadUnreadNotificationData);

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "#fff",
          color: "#121212",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={isOpen === true ? toggle : reverseToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Welcome , {user ? (user.firstname +" " + user.lastname) : "User"}
          </Typography> */}
          {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton> */}

            <div
              style={{ display: "flex" }}
              className="d-flex align-items-center"
            >
              <div>
                <Typography
                  className="ml-2"
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <div className="navbar-profile-container">
                    <div className="navbar-profile-icon">
                      <IconButton
                        size="small"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <SettingsOutlinedIcon style={{ marginRight: "15px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <NotificationsNoneIcon />
                      </IconButton>
                    </div>
                    <div className="navbar-profile-name">
                      {/* <h6>Iaamanur Rahman </h6> */}
                      <h6>email@gmail.com</h6>
                      <h6>Admin</h6>
                    </div>
                    <div className="navbar-profile-image">
                      <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                      >
                        <Image src={profile} alt="" />
                      </IconButton>
                    </div>
                  </div>
                  {/* Welcome , {user ? user.firstname + " " + user.lastname : "User"} */}
                  {/* {loggedInUser.data.attributes.first_name} */}
                  {/* {singleUserData?.data.name} */}
                </Typography>
              </div>
            </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
