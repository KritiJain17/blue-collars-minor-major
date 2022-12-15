import React, { useEffect, useMemo } from "react";
import { Route, useLocation } from "react-router-dom";
import Box from "../atoms/box.atom";

const PrivateRoute = ({ children, ...props }) => {
  const { search, pathname } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const referrerSource = queryParams.get("source");
  const referrerID = queryParams.get("trace");
  return <Route {...props} render={() => <Box>{children}</Box>} />;
};

export default PrivateRoute;
