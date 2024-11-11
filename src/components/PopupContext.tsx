// PopupContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextType {
  isPopupVisible: boolean;
  togglePopup: () => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <PopupContext.Provider value={{ isPopupVisible, togglePopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
