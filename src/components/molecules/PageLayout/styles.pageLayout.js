import styled from "@emotion/styled";
import Box from "../../atoms/box.atom";

export const PageLayoutContainer = styled(Box)`
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0px;
`;

export const NavbarContainer = styled(Box)`
  display: ${(props) => props.display};
  height: ${(props) => props.height};
  width: 100%;
`;

export const MainContainer = styled(Box)`
  background: #fcfcfc;
  border: 1px solid #234e4e;
  padding: 0px;
  margin: 0px;
  height: ${(props) => props.height};
  width: 100%;
  
`;
