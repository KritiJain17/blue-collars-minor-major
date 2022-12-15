import React, { useContext } from "react";
import NavBar from "../NavBar";
import {
  PageLayoutContainer,
  NavbarContainer,
  MainContainer,
} from "./styles.pageLayout";
import Box from "../../atoms/box.atom";

const PageLayout = ({ children }) => {
  const isLoggedIn = false;

  // const sidebarFlexValues = isLoggedIn ? ["0.3", null, null, "0.2", "0.12"] : 0;

  // const mainFlexValue = isLoggedIn ? ["0.7", null, null, "0.8", "0.88"] : 1;
  const navBarHeight = isLoggedIn ? "8%" : "0%";
  const mainHeight = isLoggedIn ? "92%" : "100%";
  // const sidebarFlexValues = isLoggedIn
  //   ? [ "0.5", , "0.5", "0.12"]
  //   : 0;

  // const mainFlexValue = isLoggedIn ? [ "0.5", "0.5", "0.88"] : 1;

  return (
    <Box width="inherit">
      <PageLayoutContainer>
        {isLoggedIn && (
          <NavbarContainer height = {navBarHeight}>
            <NavBar />
          </NavbarContainer>
        )}
        <MainContainer height = {mainHeight}>{children}</MainContainer>
      </PageLayoutContainer>
    </Box>
  );
};

export default PageLayout;
