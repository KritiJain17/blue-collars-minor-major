import React from "react";
import Modal from "../../molecules/Modal";

const MultiLanguageModal = ({ setLanguage = () => void 0 }) => {
  const HINDI = "Hindi";
  const ENGLISH = "English";
  const MODAL_HEADER = "Select Language";
  const languages = [
    {
      header: HINDI,
      clickFunction: () => {
        setLanguage(HINDI);
      },
    },
    {
      header: ENGLISH,
      clickFunction: () => {
        setLanguage(ENGLISH);
      },
    },
  ];

  return <Modal header={MODAL_HEADER} children={languages} />;
};

export default MultiLanguageModal;
