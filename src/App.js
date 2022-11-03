import { React, useEffect, useState } from "react";
import MultiLanguageModal from "./components/organisms/MultilanguageModal";
import UserTypeModal from "./components/organisms/UserTypeModal";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';

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
    <div>
      {isMultilanguageModalOpen && (
        <MultiLanguageModal setLanguage={(language) => setLanguage(language)} />
      )}
      {isUserTypeModalOpen && (
        <UserTypeModal setUserType={(userType) => setUserType(userType)} />
      )}
    </div>
  );

}

export default App;
