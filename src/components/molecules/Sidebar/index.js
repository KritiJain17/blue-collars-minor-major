// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { SidebarWrapper } from "./styles.sidebar";
// import { sidebarConfig } from "config/mockData";
// import { getComponentToRender } from "./renderer.sidebar";
// import { CONFIG } from "./constants.sidebar";
// import Box from "components/atoms/box.atom";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();
//   const defaultTab = sidebarConfig.find(
//     (config) => config.type === CONFIG.SIDEBAR_ITEM
//   );
//   const displaySidebarConfig = sidebarConfig.map((config) =>
//     config.type === CONFIG.PROFILE
//       ? {
//           ...config,
//           userInfo: {
//             name: userInfoDetails.userName,
//             email: userInfoDetails.userEmail,
//             mobile: userInfoDetails.userMobileFormatted,
//             profilePic: userInfoDetails.userProfilePicture,
//           },
//         }
//       : config
//   );
//   return (
//     <SidebarWrapper>
//       <Box>
//         {displaySidebarConfig.map((config) => {
//           const ComponentToRender = getComponentToRender(config);
//           if (!ComponentToRender) {
//             return null;
//           }
//           return (
//             <ComponentToRender
//               key={`sidebar_item_${config.id}`}
//               defaultTab={defaultTab}
//               {...config}
//               onClick={({ path }) => {
//                 navigate(path);
//               }}
//             />
//           );
//         })}
//       </Box>
//       <Box
//         color="#4f4f4f"
//         px={3}
//         style={{ cursor: "pointer" }}
//         onClick={logout}
//       >
//         Logout
//       </Box>
//     </SidebarWrapper>
//   );
// };

// export default Sidebar;
