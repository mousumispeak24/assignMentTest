import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Drawer from "@material-ui/core/Drawer";
import SideMenu from "./side-menu";

const HomeContainer = (props) => {
  const { children } = props;

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Drawer className="drawer" variant="permanent" anchor="left">
        <SideMenu />
      </Drawer>
      {children}
    </Fragment>
  );
};
export default HomeContainer;
