import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageLayout from "./components/molecules/PageLayout";
import PrivateRoute from "./components/PrivateRoute";
import MultiLanguageModal from "./components/organisms/MultilanguageModal";
import OpenJobsList from "./components/organisms/OpenJobsList";
import UserTypeModal from "./components/organisms/UserTypeModal";
import LoginPage from "./components/organisms/LoginPage";
import HomePage from "./components/organisms/HomePage";
import SeekJobs from "./components/organisms/SeekJobs";
import SeekJobsPage from "./components/organisms/SeekJobsPage";
import SeekWorkers from "./components/organisms/SeekWorkers";
import CreateJobPortfolio from "./components/organisms/CreateJobPortfolio";
import CreateJobOpportunity from "./components/organisms/CreateJobPortfolio";
import CandidateList from "./components/organisms/CandidateList";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const [language, setLanguage] = useState(null);
  const [userType, setUserType] = useState("");
  const [isMultilanguageModalOpen, setMultiLanguageModalOpen] = useState(false);
  const [isUserTypeModalOpen, setUserTypeModalOpen] = useState(false);

  useEffect(() => {
    setMultiLanguageModalOpen(true);
  }, []);

  useEffect(() => {
    if (language) {
      setMultiLanguageModalOpen(false);
      setUserTypeModalOpen(true);
    }
  }, [language]);

  return (
    //basename="/blue-collar-jobs">
    <Router>  
      <PageLayout>
        {" "}
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="home" index element={<HomePage />} />

          <Route path="seekJobs" element={<SeekJobs />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <SeekJobsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="create"
              element={
                <PrivateRoute>
                  <CreateJobPortfolio />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="seekWorkers" element={<SeekWorkers />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <CandidateList />
                </PrivateRoute>
              }
            />
            <Route
              path="create"
              element={
                <PrivateRoute>
                  <CreateJobOpportunity />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;

// <div>
//   {isMultilanguageModalOpen && (
//     <MultiLanguageModal setLanguage={(language) => setLanguage(language)} />
//   )}
//   {isUserTypeModalOpen && (
//     <UserTypeModal setUserType={(userType) => setUserType(userType)} />
//   )}
// </div>

// <OpenJobsList/>

// <Router basename = "/blue-collars-job">
//   <PageLayout>
//     <Routes>
//     <Route path="seeker" element={<CampaignsIndexPage />}>
//           <Route
//             index
//             element={
//               <PrivateRoute>
//                 <CampaignsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="myJobs"
//             element={
//               <PrivateRoute>
//                 <CreateCampaignPage />
//               </PrivateRoute>
//             }
//           />
//         </Route>
//     </Routes>
//   </PageLayout>
// </Router>
